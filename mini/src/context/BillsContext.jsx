import React, { createContext, useState, useContext, useEffect } from 'react';
import { getBills, addBill, settleBill, deleteBill } from '../services/api';

const BillsContext = createContext();

export const useBills = () => {
  const context = useContext(BillsContext);
  if (!context) {
    throw new Error('useBills must be used within BillsProvider');
  }
  return context;
};

export const BillsProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadBills();
  }, []);

  const loadBills = async () => {
    setLoading(true);
    try {
      const response = await getBills();
      if (response.success) {
        setBills(response.data);
      }
    } catch (error) {
      console.error('Failed to load bills:', error);
    } finally {
      setLoading(false);
    }
  };

  const createBill = async (billData) => {
    try {
      const response = await addBill(billData);
      if (response.success) {
        await loadBills();
        return { success: true };
      }
    } catch (error) {
      console.error('Failed to create bill:', error);
      return { success: false, error };
    }
  };

  const markSettled = async (id) => {
    try {
      const response = await settleBill(id);
      if (response.success) {
        await loadBills();
        return { success: true };
      }
    } catch (error) {
      console.error('Failed to settle bill:', error);
      return { success: false, error };
    }
  };

  const removeBill = async (id) => {
    try {
      const response = await deleteBill(id);
      if (response.success) {
        await loadBills();
        return { success: true };
      }
    } catch (error) {
      console.error('Failed to delete bill:', error);
      return { success: false, error };
    }
  };

  const value = {
    bills,
    loading,
    createBill,
    markSettled,
    removeBill,
    refreshBills: loadBills
  };

  return <BillsContext.Provider value={value}>{children}</BillsContext.Provider>;
};

export default BillsContext;
