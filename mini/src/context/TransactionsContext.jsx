import React, { createContext, useState, useContext, useEffect } from 'react';
import { getExpenses, addExpense, updateExpense, deleteExpense, getTransactions } from '../services/api';

const TransactionsContext = createContext();

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error('useTransactions must be used within TransactionsProvider');
  }
  return context;
};

export const TransactionsProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [expensesRes, transactionsRes] = await Promise.all([
        getExpenses(),
        getTransactions()
      ]);
      
      if (expensesRes.success) setExpenses(expensesRes.data);
      if (transactionsRes.success) setTransactions(transactionsRes.data);
    } catch (error) {
      console.error('Failed to load transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const createExpense = async (expenseData) => {
    try {
      const response = await addExpense(expenseData);
      if (response.success) {
        await loadData();
        return { success: true };
      }
    } catch (error) {
      console.error('Failed to create expense:', error);
      return { success: false, error };
    }
  };

  const modifyExpense = async (id, updates) => {
    try {
      const response = await updateExpense(id, updates);
      if (response.success) {
        await loadData();
        return { success: true };
      }
    } catch (error) {
      console.error('Failed to update expense:', error);
      return { success: false, error };
    }
  };

  const removeExpense = async (id) => {
    try {
      const response = await deleteExpense(id);
      if (response.success) {
        await loadData();
        return { success: true };
      }
    } catch (error) {
      console.error('Failed to delete expense:', error);
      return { success: false, error };
    }
  };

  const value = {
    expenses,
    transactions,
    loading,
    createExpense,
    modifyExpense,
    removeExpense,
    refreshData: loadData
  };

  return <TransactionsContext.Provider value={value}>{children}</TransactionsContext.Provider>;
};

export default TransactionsContext;
