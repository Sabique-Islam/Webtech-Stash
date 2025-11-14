import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useBills } from '../../context/BillsContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/dateHelpers';
import SplitBillModal from '../../components/modals/SplitBillModal';
import './Bills.css';

const Bills = () => {
  const { bills, markSettled, removeBill } = useBills();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeBills = bills.filter(b => !b.settled);
  const settledBills = bills.filter(b => b.settled);

  return (
    <div className="bills-page">
      <header className="page-header">
        <div>
          <h1>Split Bills</h1>
          <p className="subtitle">Manage shared expenses with friends</p>
        </div>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setIsModalOpen(true)}
          sx={{ 
            backgroundColor: 'var(--teal-accent)',
            '&:hover': { backgroundColor: '#3a9688' }
          }}
        >
          Split New Bill
        </Button>
      </header>

      <div className="bills-section">
        <h2>Active Bills</h2>
        {activeBills.length === 0 ? (
          <div className="empty-state">No active bills</div>
        ) : (
          <div className="bills-grid">
            {activeBills.map(bill => (
              <div key={bill.id} className="bill-card">
                <div className="bill-header">
                  <h3>{bill.description}</h3>
                  <span className="bill-amount">{formatCurrency(bill.totalAmount)}</span>
                </div>
                <div className="bill-date">{formatDate(bill.date)}</div>
                <div className="bill-shares">
                  <h4>Split Between:</h4>
                  {bill.shares.map(share => (
                    <div key={share.userId} className="share-item">
                      <span>{share.name}</span>
                      <span className="share-amount">{formatCurrency(share.amount)}</span>
                    </div>
                  ))}
                </div>
                <div className="bill-actions">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => markSettled(bill.id)}
                    sx={{ 
                      backgroundColor: 'var(--success)',
                      '&:hover': { backgroundColor: '#229954' }
                    }}
                  >
                    Mark as Settled
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => removeBill(bill.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bills-section">
        <h2>Settled Bills</h2>
        {settledBills.length === 0 ? (
          <div className="empty-state">No settled bills</div>
        ) : (
          <div className="bills-grid">
            {settledBills.map(bill => (
              <div key={bill.id} className="bill-card settled">
                <div className="bill-header">
                  <h3>{bill.description}</h3>
                  <span className="bill-amount">{formatCurrency(bill.totalAmount)}</span>
                </div>
                <div className="bill-date">{formatDate(bill.date)}</div>
                <div className="settled-badge">✓ Settled</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <SplitBillModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Bills;
