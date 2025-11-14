import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem } from '@mui/material';
import { useTransactions } from '../../context/TransactionsContext';
import './ExpenseForm.css';

const ExpenseForm = ({ open, onClose, expense = null }) => {
  const { createExpense, modifyExpense } = useTransactions();
  const [formData, setFormData] = useState(expense || {
    description: '',
    amount: '',
    category: 'Food',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });

  const categories = ['Food', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      ...formData,
      amount: parseFloat(formData.amount)
    };

    if (expense) {
      modifyExpense(expense.id, expenseData);
    } else {
      createExpense(expenseData);
    }
    onClose();
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{expense ? 'Edit Expense' : 'Add New Expense'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <div className="form-fields">
            <TextField
              label="Description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              required
              fullWidth
            />
            
            <TextField
              label="Amount"
              type="number"
              value={formData.amount}
              onChange={(e) => handleChange('amount', e.target.value)}
              required
              fullWidth
              inputProps={{ step: '0.01', min: '0' }}
            />

            <TextField
              label="Category"
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              select
              required
              fullWidth
            >
              {categories.map(cat => (
                <MenuItem key={cat} value={cat}>{cat}</MenuItem>
              ))}
            </TextField>

            <TextField
              label="Date"
              type="date"
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Notes"
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              multiline
              rows={3}
              fullWidth
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" 
            sx={{ 
              backgroundColor: 'var(--primary-blue)',
              '&:hover': { backgroundColor: '#15325e' }
            }}
          >
            {expense ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ExpenseForm;
