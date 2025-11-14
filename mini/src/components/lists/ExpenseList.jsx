import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/dateHelpers';
import { useTransactions } from '../../context/TransactionsContext';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  const { removeExpense } = useTransactions();

  if (expenses.length === 0) {
    return (
      <div className="empty-state">
        <p>No expenses found</p>
      </div>
    );
  }

  return (
    <div className="expense-list">
      {expenses.map(expense => (
        <div key={expense.id} className="expense-item">
          <div className="expense-info">
            <div className="expense-category">{expense.category}</div>
            <h3 className="expense-description">{expense.description}</h3>
            <p className="expense-date">{formatDate(expense.date)}</p>
            {expense.notes && <p className="expense-notes">{expense.notes}</p>}
          </div>
          <div className="expense-actions">
            <div className="expense-amount">{formatCurrency(expense.amount)}</div>
            <div className="action-buttons">
              <IconButton size="small" color="primary">
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small" 
                color="error"
                onClick={() => removeExpense(expense.id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
