import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { addSavingsGoal } from '../../services/api';

const SavingsGoalModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    currentAmount: '0',
    targetDate: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addSavingsGoal({
      ...formData,
      targetAmount: parseFloat(formData.targetAmount),
      currentAmount: parseFloat(formData.currentAmount)
    });
    onClose();
    setFormData({ name: '', targetAmount: '', currentAmount: '0', targetDate: '' });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Create Savings Goal</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <div className="form-fields">
            <TextField
              label="Goal Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              fullWidth
            />
            
            <TextField
              label="Target Amount"
              type="number"
              value={formData.targetAmount}
              onChange={(e) => setFormData({ ...formData, targetAmount: e.target.value })}
              required
              fullWidth
              inputProps={{ step: '0.01', min: '0' }}
            />

            <TextField
              label="Current Amount"
              type="number"
              value={formData.currentAmount}
              onChange={(e) => setFormData({ ...formData, currentAmount: e.target.value })}
              fullWidth
              inputProps={{ step: '0.01', min: '0' }}
            />

            <TextField
              label="Target Date"
              type="date"
              value={formData.targetDate}
              onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" 
            sx={{ 
              backgroundColor: 'var(--success)',
              '&:hover': { backgroundColor: '#229954' }
            }}
          >
            Create Goal
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SavingsGoalModal;
