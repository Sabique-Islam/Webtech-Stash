import React from 'react';
import { IconButton, Badge, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import { getRelativeTime } from '../../utils/dateHelpers';
import './NotificationBell.css';

const NotificationBell = ({ notifications = [] }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewAll = () => {
    navigate('/notifications');
    handleClose();
  };

  const handleNotificationClick = (notification) => {
    // Navigate based on notification type
    if (notification.type === 'expense') {
      navigate('/expenses');
    } else if (notification.type === 'bill') {
      navigate('/bills');
    }
    handleClose();
  };

  return (
    <>
      <IconButton 
        onClick={handleClick}
        size="medium"
        aria-label={`${unreadCount} unread notifications`}
      >
        <Badge badgeContent={unreadCount} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 400,
            width: 320,
          },
        }}
      >
        <div className="notification-menu-header">
          <h3>Notifications</h3>
        </div>

        {notifications.length === 0 ? (
          <MenuItem disabled>
            <span className="no-notifications">No notifications</span>
          </MenuItem>
        ) : [
          ...notifications.slice(0, 5).map((notification) => (
            <MenuItem 
              key={notification.id} 
              onClick={() => handleNotificationClick(notification)}
              className={!notification.read ? 'unread' : ''}
            >
              <div className="notification-item">
                <div className="notification-title">{notification.title}</div>
                <div className="notification-message">{notification.message}</div>
                <div className="notification-time">{getRelativeTime(notification.date)}</div>
              </div>
            </MenuItem>
          )),
          <MenuItem key="view-all" onClick={handleViewAll} className="view-all">
            <span>View All Notifications</span>
          </MenuItem>
        ]}
      </Menu>
    </>
  );
};

export default NotificationBell;
