import React from 'react';
import { LinearProgress } from '@mui/material';
import { formatCurrency } from '../../utils/formatCurrency';
import './SavingsProgress.css';

const SavingsProgress = ({ goal }) => {
  const progress = (goal.currentAmount / goal.targetAmount) * 100;
  const remaining = goal.targetAmount - goal.currentAmount;
  const daysRemaining = Math.ceil(
    (new Date(goal.targetDate) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="savings-progress">
      <div className="progress-header">
        <h4>{goal.name}</h4>
        <span className="progress-percentage">{progress.toFixed(1)}%</span>
      </div>

      <LinearProgress 
        variant="determinate" 
        value={Math.min(progress, 100)} 
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: 'var(--light-bg)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'var(--success)',
            borderRadius: 4,
          }
        }}
      />

      <div className="progress-details">
        <div className="progress-amounts">
          <span className="current-amount">{formatCurrency(goal.currentAmount)}</span>
          <span className="target-amount">{formatCurrency(goal.targetAmount)}</span>
        </div>
        
        <div className="progress-info">
          {remaining > 0 ? (
            <>
              <span className="remaining">{formatCurrency(remaining)} remaining</span>
              <span className="deadline">
                {daysRemaining > 0 
                  ? `${daysRemaining} days left` 
                  : 'Deadline passed'}
              </span>
            </>
          ) : (
            <span className="goal-reached">🎉 Goal reached!</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavingsProgress;
