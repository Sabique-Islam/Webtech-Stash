import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import SavingsIcon from '@mui/icons-material/Savings';
import HistoryIcon from '@mui/icons-material/History';
import InsightsIcon from '@mui/icons-material/Insights';
import './SideNav.css';

const SideNav = () => {
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { path: '/expenses', label: 'Expenses', icon: <ReceiptIcon /> },
    { path: '/bills', label: 'Split Bills', icon: <SplitscreenIcon /> },
    { path: '/savings', label: 'Savings', icon: <SavingsIcon /> },
    { path: '/transactions', label: 'Transactions', icon: <HistoryIcon /> },
    { path: '/insights', label: 'Insights', icon: <InsightsIcon /> },
  ];

  return (
    <aside className="side-nav">
      <nav className="nav-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
