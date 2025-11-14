import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { getNotifications, markNotificationRead } from '../../services/api';
import { getRelativeTime } from '../../utils/dateHelpers';
import './Notifications.css';

const Notifications = () => {
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

  const handleMarkAsRead = async (id) => {
    await markNotificationRead(id);
    loadNotifications();
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notifications-page">
      <header className="page-header">
        <div>
          <h1>Notifications</h1>
          <p className="subtitle">{unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}</p>
        </div>
      </header>

      <div className="notifications-list">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`notification-item ${!notification.read ? 'unread' : ''}`}
            onClick={() => !notification.read && handleMarkAsRead(notification.id)}
          >
            <div className="notification-content">
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <span className="notification-time">{getRelativeTime(notification.date)}</span>
            </div>
            <IconButton 
              size="small" 
              onClick={(e) => {
                e.stopPropagation();
                // Handle delete
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="empty-state">
            <p>No notifications</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
