import React from 'react';
import { useTransactions } from '../../context/TransactionsContext';
import { formatCurrency } from '../../utils/formatCurrency';
import ChartContainer from '../../components/charts/ChartContainer';
import './Insights.css';

const Insights = () => {
  const { expenses, transactions } = useTransactions();

  // Calculate insights
  const thisMonth = new Date().getMonth();
  const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;

  const thisMonthExpenses = expenses
    .filter(e => new Date(e.date).getMonth() === thisMonth)
    .reduce((sum, e) => sum + e.amount, 0);

  const lastMonthExpenses = expenses
    .filter(e => new Date(e.date).getMonth() === lastMonth)
    .reduce((sum, e) => sum + e.amount, 0);

  const changePercent = lastMonthExpenses 
    ? ((thisMonthExpenses - lastMonthExpenses) / lastMonthExpenses * 100).toFixed(1)
    : 0;

  // Category breakdown
  const categoryBreakdown = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  const categoryData = Object.entries(categoryBreakdown)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  // Daily spending trend
  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date;
  });

  const dailyData = last7Days.map(date => {
    const dayExpenses = expenses
      .filter(e => new Date(e.date).toDateString() === date.toDateString())
      .reduce((sum, e) => sum + e.amount, 0);
    
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      amount: dayExpenses
    };
  });

  // Top expenses
  const topExpenses = [...expenses]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  return (
    <div className="insights-page">
      <header className="page-header">
        <h1>Insights</h1>
        <p className="subtitle">Analyze your spending patterns</p>
      </header>

      <div className="insights-summary">
        <div className="summary-card">
          <h3>This Month</h3>
          <p className="amount">{formatCurrency(thisMonthExpenses)}</p>
        </div>
        <div className="summary-card">
          <h3>Last Month</h3>
          <p className="amount">{formatCurrency(lastMonthExpenses)}</p>
        </div>
        <div className="summary-card">
          <h3>Change</h3>
          <p className={`amount ${changePercent > 0 ? 'negative' : 'positive'}`}>
            {changePercent > 0 ? '+' : ''}{changePercent}%
          </p>
        </div>
      </div>

      <div className="charts-section">
        <ChartContainer 
          title="Spending by Category" 
          type="pie" 
          data={categoryData}
        />
        <ChartContainer 
          title="Last 7 Days Spending" 
          type="line" 
          data={dailyData}
        />
      </div>

      <div className="top-expenses">
        <h2>Top 5 Expenses</h2>
        <div className="expenses-list">
          {topExpenses.map((exp, index) => (
            <div key={exp.id} className="expense-row">
              <div className="expense-rank">{index + 1}</div>
              <div className="expense-info">
                <h4>{exp.description}</h4>
                <p>{exp.category}</p>
              </div>
              <div className="expense-amount">{formatCurrency(exp.amount)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
