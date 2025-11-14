import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useBills } from '../../context/BillsContext';
import './SplitBillModal.css';

const SplitBillModal = ({ open, onClose }) => {
  const { createBill } = useBills();
  const [formData, setFormData] = useState({
    description: '',
    totalAmount: '',
    date: new Date().toISOString().split('T')[0],
  });
  const [participants, setParticipants] = useState([
    { name: '', amount: '' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const billData = {
      ...formData,
      totalAmount: parseFloat(formData.totalAmount),
      shares: participants.map((p, idx) => ({
        userId: `user${idx + 1}`,
        name: p.name,
        amount: parseFloat(p.amount)
      }))
    };
    createBill(billData);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setFormData({ description: '', totalAmount: '', date: new Date().toISOString().split('T')[0] });
    setParticipants([{ name: '', amount: '' }]);
  };

  const addParticipant = () => {
    setParticipants([...participants, { name: '', amount: '' }]);
  };

  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const updateParticipant = (index, field, value) => {
    const updated = [...participants];
    updated[index][field] = value;
    setParticipants(updated);
  };

  const splitEqually = () => {
    const amount = parseFloat(formData.totalAmount);
    if (amount && participants.length > 0) {
      const share = (amount / participants.length).toFixed(2);
      setParticipants(participants.map(p => ({ ...p, amount: share })));
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Split Bill</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <div className="form-fields">
            <TextField
              label="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              fullWidth
            />
            
            <TextField
              label="Total Amount"
              type="number"
              value={formData.totalAmount}
              onChange={(e) => setFormData({ ...formData, totalAmount: e.target.value })}
              required
              fullWidth
              inputProps={{ step: '0.01', min: '0' }}
            />

            <TextField
              label="Date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
            />

            <div className="participants-section">
              <div className="section-header">
                <h4>Participants</h4>
                <Button size="small" onClick={splitEqually}>Split Equally</Button>
              </div>
              
              {participants.map((participant, index) => (
                <div key={index} className="participant-row">
                  <TextField
                    label="Name"
                    value={participant.name}
                    onChange={(e) => updateParticipant(index, 'name', e.target.value)}
                    required
                    size="small"
                  />
                  <TextField
                    label="Amount"
                    type="number"
                    value={participant.amount}
                    onChange={(e) => updateParticipant(index, 'amount', e.target.value)}
                    required
                    size="small"
                    inputProps={{ step: '0.01', min: '0' }}
                  />
                  <IconButton 
                    onClick={() => removeParticipant(index)}
                    disabled={participants.length === 1}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              ))}

              <Button
                startIcon={<AddIcon />}
                onClick={addParticipant}
                variant="outlined"
                size="small"
              >
                Add Participant
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" 
            sx={{ 
              backgroundColor: 'var(--teal-accent)',
              '&:hover': { backgroundColor: '#3a9688' }
            }}
          >
            Split Bill
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SplitBillModal;
