import React, { useState } from 'react';
import { TextField, Button, Avatar } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    college: user?.college || '',
    year: user?.year || ''
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <header className="page-header">
        <h1>Profile</h1>
        <p className="subtitle">Manage your account settings</p>
      </header>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar">
            <Avatar 
              sx={{ 
                width: 100, 
                height: 100, 
                backgroundColor: 'var(--primary-blue)',
                fontSize: '2.5rem'
              }}
            >
              {user?.name?.charAt(0) || 'U'}
            </Avatar>
            <h2>{user?.name || 'User'}</h2>
            <p>{user?.email || 'user@example.com'}</p>
          </div>

          <form onSubmit={handleSubmit} className="profile-form">
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={!isEditing}
              fullWidth
            />

            <TextField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={!isEditing}
              fullWidth
            />

            <TextField
              label="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={!isEditing}
              fullWidth
            />

            <TextField
              label="College"
              value={formData.college}
              onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              disabled={!isEditing}
              fullWidth
            />

            <TextField
              label="Year"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              disabled={!isEditing}
              fullWidth
            />

            <div className="form-actions">
              {!isEditing ? (
                <Button 
                  variant="contained" 
                  onClick={() => setIsEditing(true)}
                  sx={{ 
                    backgroundColor: 'var(--primary-blue)',
                    '&:hover': { backgroundColor: '#15325e' }
                  }}
                >
                  Edit Profile
                </Button>
              ) : (
                <>
                  <Button 
                    variant="outlined" 
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    variant="contained"
                    sx={{ 
                      backgroundColor: 'var(--primary-blue)',
                      '&:hover': { backgroundColor: '#15325e' }
                    }}
                  >
                    Save Changes
                  </Button>
                </>
              )}
            </div>
          </form>
        </div>

        <div className="settings-card">
          <h3>Settings</h3>
          <div className="settings-list">
            <div className="setting-item">
              <div>
                <h4>Notifications</h4>
                <p>Manage notification preferences</p>
              </div>
              <Button variant="outlined" size="small">Configure</Button>
            </div>

            <div className="setting-item">
              <div>
                <h4>Currency</h4>
                <p>Set your preferred currency</p>
              </div>
              <Button variant="outlined" size="small">Change</Button>
            </div>

            <div className="setting-item">
              <div>
                <h4>Export Data</h4>
                <p>Download your financial data</p>
              </div>
              <Button variant="outlined" size="small">Download</Button>
            </div>

            <div className="setting-item danger">
              <div>
                <h4>Delete Account</h4>
                <p>Permanently delete your account and data</p>
              </div>
              <Button variant="outlined" color="error" size="small">Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
