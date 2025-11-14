import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTransactions } from '../../context/TransactionsContext';
import ExpenseForm from '../../components/forms/ExpenseForm';
import ExpenseList from '../../components/lists/ExpenseList';
import './Expenses.css';

const Expenses = () => {
  const { expenses } = useTransactions();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const filteredExpenses = filter === 'all' 
    ? expenses 
    : expenses.filter(exp => exp.category === filter);

  const categories = [...new Set(expenses.map(exp => exp.category))];

  return (
    <div className="expenses-page">
      <header className="page-header">
        <div>
          <h1>Expenses</h1>
          <p className="subtitle">Track and manage your expenses</p>
        </div>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setIsFormOpen(true)}
          sx={{ 
            backgroundColor: 'var(--primary-blue)',
            '&:hover': { backgroundColor: '#15325e' }
          }}
        >
          Add Expense
        </Button>
      </header>

      <div className="filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ExpenseList expenses={filteredExpenses} />

      <ExpenseForm 
        open={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  );
};

export default Expenses;
