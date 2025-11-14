import React from 'react';
import { useTransactions } from '../../context/TransactionsContext';
import { useBills } from '../../context/BillsContext';
import { formatCurrency } from '../../utils/formatCurrency';
import StatCard from '../../components/common/StatCard';
import ChartContainer from '../../components/charts/ChartContainer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SavingsIcon from '@mui/icons-material/Savings';
import './Dashboard.css';

const Dashboard = () => {
  const { expenses, transactions } = useTransactions();
  const { bills } = useBills();

  // Calculate stats
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const thisMonthExpenses = expenses
    .filter(exp => new Date(exp.date).getMonth() === new Date().getMonth())
    .reduce((sum, exp) => sum + exp.amount, 0);
  
  const unsettledBills = bills.filter(bill => !bill.settled);
  const totalOwed = unsettledBills.reduce((sum, bill) => {
    const myShare = bill.shares.find(s => s.userId === 'user1');
    return sum + (myShare?.amount || 0);
  }, 0);

  // Mock savings goal progress
  const savingsGoal = 50000;
  const currentSavings = 32000;

  const stats = [
    {
      title: 'Total Expenses',
      value: formatCurrency(totalExpenses),
      icon: <TrendingDownIcon />,
      color: 'danger',
      subtitle: 'All time'
    },
    {
      title: 'This Month',
      value: formatCurrency(thisMonthExpenses),
      icon: <AccountBalanceWalletIcon />,
      color: 'primary',
      subtitle: new Date().toLocaleDateString('en-US', { month: 'long' })
    },
    {
      title: 'Pending Bills',
      value: formatCurrency(totalOwed),
      icon: <TrendingUpIcon />,
      color: 'warning',
      subtitle: `${unsettledBills.length} bills`
    },
    {
      title: 'Savings Progress',
      value: `${Math.round((currentSavings / savingsGoal) * 100)}%`,
      icon: <SavingsIcon />,
      color: 'success',
      subtitle: `${formatCurrency(currentSavings)} of ${formatCurrency(savingsGoal)}`
    }
  ];

  // Prepare chart data - expenses by category
  const categoryData = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  const pieChartData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value
  }));

  // Monthly spending trend
  const monthlyData = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      const month = new Date(t.date).toLocaleDateString('en-US', { month: 'short' });
      acc[month] = (acc[month] || 0) + t.amount;
      return acc;
    }, {});

  const lineChartData = Object.entries(monthlyData).map(([month, amount]) => ({
    month,
    amount
  }));

  return (
    <div className="dashboard-page">
      <header className="page-header">
        <h1>Dashboard</h1>
        <p className="subtitle">Welcome back! Here's your financial overview</p>
      </header>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="charts-grid">
        <ChartContainer 
          title="Spending by Category" 
          type="pie" 
          data={pieChartData}
        />
        <ChartContainer 
          title="Monthly Spending Trend" 
          type="line" 
          data={lineChartData}
        />
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <a href="/expenses" className="action-btn primary">
            Add Expense
          </a>
          <a href="/bills" className="action-btn secondary">
            Split Bill
          </a>
          <a href="/savings" className="action-btn tertiary">
            Set Goal
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
