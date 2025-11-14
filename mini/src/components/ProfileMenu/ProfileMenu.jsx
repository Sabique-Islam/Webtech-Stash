import React from 'react';
import { IconButton, Menu, MenuItem, Avatar, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './ProfileMenu.css';

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate('/profile');
    handleClose();
  };

  const handleLogout = () => {
    logout();
    handleClose();
    // Optionally navigate to login page
  };

  return (
    <>
      <IconButton 
        onClick={handleClick}
        size="medium"
        aria-label="user profile menu"
      >
        <Avatar 
          sx={{ 
            width: 32, 
            height: 32, 
            backgroundColor: 'var(--primary-blue)',
            fontSize: '1rem'
          }}
        >
          {user?.name?.charAt(0) || 'U'}
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 220,
          },
        }}
      >
        <div className="profile-menu-header">
          <Avatar 
            sx={{ 
              width: 48, 
              height: 48, 
              backgroundColor: 'var(--primary-blue)',
              fontSize: '1.5rem'
            }}
          >
            {user?.name?.charAt(0) || 'U'}
          </Avatar>
          <div className="profile-info">
            <div className="profile-name">{user?.name || 'User'}</div>
            <div className="profile-email">{user?.email || 'user@example.com'}</div>
          </div>
        </div>

        <Divider />

        <MenuItem onClick={handleProfile}>
          <AccountCircleIcon sx={{ mr: 1.5, fontSize: 20 }} />
          Profile
        </MenuItem>

        <MenuItem onClick={handleProfile}>
          <SettingsIcon sx={{ mr: 1.5, fontSize: 20 }} />
          Settings
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleLogout} className="logout-item">
          <LogoutIcon sx={{ mr: 1.5, fontSize: 20 }} />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
