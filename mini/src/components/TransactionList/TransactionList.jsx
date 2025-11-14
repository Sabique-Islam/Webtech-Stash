import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDateTime } from '../../utils/dateHelpers';
import './TransactionList.css';

const TransactionList = ({ transactions, limit = null }) => {
  const displayTransactions = limit ? transactions.slice(0, limit) : transactions;

  if (transactions.length === 0) {
    return (
      <div className="empty-state">
        <p>No transactions yet</p>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      {displayTransactions.map(transaction => (
        <div key={transaction.id} className="transaction-item">
          <div className="transaction-info">
            <div className="transaction-header">
              <h4>{transaction.description}</h4>
              {transaction.category && (
                <span className="transaction-category">{transaction.category}</span>
              )}
            </div>
            <p className="transaction-date">{formatDateTime(transaction.date)}</p>
          </div>
          
          <div className={`transaction-amount ${transaction.type}`}>
            {transaction.type === 'expense' ? '-' : '+'}
            {formatCurrency(transaction.amount)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
