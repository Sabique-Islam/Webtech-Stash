import React, { useState, useEffect } from 'react';
import { TextField, MenuItem } from '@mui/material';
import { getTransactions } from '../../services/api';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDateTime } from '../../utils/dateHelpers';
import './Transactions.css';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState({ type: 'all', category: 'all', search: '' });

  useEffect(() => {
    loadTransactions();
  }, [filter]);

  const loadTransactions = async () => {
    const response = await getTransactions(filter);
    if (response.success) {
      setTransactions(response.data);
    }
  };

  const categories = [...new Set(transactions.map(t => t.category).filter(Boolean))];

  return (
    <div className="transactions-page">
      <header className="page-header">
        <div>
          <h1>Transactions</h1>
          <p className="subtitle">Complete transaction history</p>
        </div>
      </header>

      <div className="filters-bar">
        <TextField
          label="Search"
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          size="small"
          sx={{ minWidth: 200 }}
        />

        <TextField
          select
          label="Type"
          value={filter.type}
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
          size="small"
          sx={{ minWidth: 150 }}
        >
          <MenuItem value="all">All Types</MenuItem>
          <MenuItem value="expense">Expenses</MenuItem>
          <MenuItem value="income">Income</MenuItem>
        </TextField>

        {categories.length > 0 && (
          <TextField
            select
            label="Category"
            value={filter.category}
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
            size="small"
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="all">All Categories</MenuItem>
            {categories.map(cat => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </TextField>
        )}
      </div>

      <div className="transactions-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Type</th>
              <th className="amount-col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{formatDateTime(transaction.date)}</td>
                <td>{transaction.description}</td>
                <td>
                  <span className="category-badge">{transaction.category || 'N/A'}</span>
                </td>
                <td>
                  <span className={`type-badge ${transaction.type}`}>
                    {transaction.type}
                  </span>
                </td>
                <td className={`amount-col ${transaction.type}`}>
                  {transaction.type === 'expense' ? '-' : '+'}{formatCurrency(transaction.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {transactions.length === 0 && (
          <div className="empty-state">No transactions found</div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
