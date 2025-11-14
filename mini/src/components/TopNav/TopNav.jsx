import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import NotificationBell from '../NotificationBell/NotificationBell';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { getNotifications } from '../../services/api';
import './TopNav.css';

const TopNav = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const response = await getNotifications();
    if (response.success) {
      setNotifications(response.data);
    }
  };

  return (
    <nav className="top-nav">
      <div className="nav-container">
        <Link to="/dashboard" className="nav-logo">
          <h1>CampusCash</h1>
        </Link>
        
        <div className="nav-actions">
          <NotificationBell notifications={notifications} />
          
          <div className="profile-section">
            <span className="user-name">{user?.name || 'User'}</span>
            <ProfileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
