import React, { useState, useEffect } from 'react';
import { Button, LinearProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { formatCurrency } from '../../utils/formatCurrency';
import { getSavingsGoals, addSavingsGoal, addDeposit } from '../../services/api';
import SavingsGoalModal from '../../components/modals/SavingsGoalModal';
import './Savings.css';

const Savings = () => {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    const response = await getSavingsGoals();
    if (response.success) {
      setGoals(response.data);
    }
  };

  const handleAddDeposit = async (goalId, amount) => {
    await addDeposit(goalId, amount);
    loadGoals();
  };

  return (
    <div className="savings-page">
      <header className="page-header">
        <div>
          <h1>Savings Goals</h1>
          <p className="subtitle">Track your savings progress</p>
        </div>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setIsModalOpen(true)}
          sx={{ 
            backgroundColor: 'var(--success)',
            '&:hover': { backgroundColor: '#229954' }
          }}
        >
          New Goal
        </Button>
      </header>

      <div className="goals-grid">
        {goals.map(goal => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          const remaining = goal.targetAmount - goal.currentAmount;

          return (
            <div key={goal.id} className="goal-card">
              <div className="goal-header">
                <h3>{goal.name}</h3>
                <span className="goal-target">{formatCurrency(goal.targetAmount)}</span>
              </div>

              <div className="goal-progress">
                <LinearProgress 
                  variant="determinate" 
                  value={Math.min(progress, 100)} 
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'var(--light-bg)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'var(--success)'
                    }
                  }}
                />
                <div className="progress-text">
                  <span>{formatCurrency(goal.currentAmount)}</span>
                  <span>{progress.toFixed(1)}%</span>
                </div>
              </div>

              <div className="goal-details">
                <p className="goal-remaining">
                  {remaining > 0 ? `${formatCurrency(remaining)} remaining` : 'Goal reached! 🎉'}
                </p>
                <p className="goal-deadline">Target: {new Date(goal.targetDate).toLocaleDateString()}</p>
              </div>

              <Button
                variant="outlined"
                size="small"
                fullWidth
                sx={{ 
                  borderColor: 'var(--success)',
                  color: 'var(--success)',
                  '&:hover': { 
                    borderColor: '#229954',
                    backgroundColor: 'rgba(39, 174, 96, 0.04)'
                  }
                }}
                onClick={() => {
                  const amount = prompt('Enter deposit amount:');
                  if (amount) handleAddDeposit(goal.id, parseFloat(amount));
                }}
              >
                Add Deposit
              </Button>
            </div>
          );
        })}
      </div>

      {goals.length === 0 && (
        <div className="empty-state">
          <p>No savings goals yet. Create one to start saving!</p>
        </div>
      )}

      <SavingsGoalModal 
        open={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          loadGoals();
        }} 
      />
    </div>
  );
};

export default Savings;
