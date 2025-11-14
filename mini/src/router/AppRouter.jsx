import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Expenses from '../pages/Expenses/Expenses';
import Bills from '../pages/Bills/Bills';
import Savings from '../pages/Savings/Savings';
import Transactions from '../pages/Transactions/Transactions';
import Insights from '../pages/Insights/Insights';
import Notifications from '../pages/Notifications/Notifications';
import Profile from '../pages/Profile/Profile';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="bills" element={<Bills />} />
        <Route path="savings" element={<Savings />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="insights" element={<Insights />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
