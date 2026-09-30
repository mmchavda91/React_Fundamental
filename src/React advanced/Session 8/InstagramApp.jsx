import React, { useContext, useState } from 'react';
import { AuthContext, AuthProvider } from './AuthContext';
import './InstagramApp.css';

const Navbar = () => {
  const { authState, authDispatch } = useContext(AuthContext);

  return (
    <nav className="insta-navbar">
      <div className="brand">InstaClone</div>
      <div className="nav-actions">
        {authState.isAuthenticated ? (
          <>
            <span className="welcome-text">Hi, <strong>{authState.user.displayName}</strong></span>
            <button className="logout-btn" onClick={() => authDispatch({ type: 'LOGOUT' })}>
              Logout
            </button>
          </>
        ) : (
          <span className="welcome-text">Please log in to continue</span>
        )}
      </div>
    </nav>
  );
};

const ProfileContent = () => {
  const { authState, authDispatch } = useContext(AuthContext);
  const [newName, setNewName] = useState('');

  // Show login screen if not authenticated
  if (!authState.isAuthenticated) {
    return (
      <div className="login-container">
        <h2>Welcome to InstaClone</h2>
        <button 
          className="login-btn"
          onClick={() => authDispatch({ 
            type: 'LOGIN', 
            payload: { username: 'guest_user', displayName: 'Guest' } 
          })}
        >
          Log In as Guest
        </button>
      </div>
    );
  }

  // Handle updating the display name
  const handleUpdateName = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      // Dispatch the new action to update the display name in context
      authDispatch({ type: 'UPDATE_DISPLAY_NAME', payload: newName });
      setNewName('');
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {/* Display first letter of display name */}
          {authState.user.displayName.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <h2>{authState.user.username}</h2>
          <h3>{authState.user.displayName}</h3>
        </div>
      </div>
      
      <div className="edit-profile-section">
        <h4>Edit Profile</h4>
        <form onSubmit={handleUpdateName} className="edit-form">
          <input 
            type="text" 
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter new display name..."
          />
          <button type="submit" className="update-btn">Update Name</button>
        </form>
      </div>
    </div>
  );
};

const InstagramApp = () => {
  return (
    <AuthProvider>
      <div className="insta-app-wrapper">
        <Navbar />
        <main className="insta-main">
          <ProfileContent />
        </main>
      </div>
    </AuthProvider>
  );
};

export default InstagramApp;
