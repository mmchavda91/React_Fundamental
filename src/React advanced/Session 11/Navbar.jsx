import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../Session 10/firebase';
import './Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // onAuthStateChanged listens for login/logout events in real-time
    // No page refresh needed - React state updates automatically
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // onAuthStateChanged will set user -> null automatically, updating UI instantly
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Spotify-style: prefer displayName, fallback to email
  const getGreeting = () => {
    if (!user) return null;
    return user.displayName ? user.displayName : user.email;
  };

  return (
    <nav className="spotify-navbar">
      {/* Logo */}
      <div className="spotify-logo">
        <span className="logo-icon">🎵</span>
        <span className="logo-text">MyMusic</span>
      </div>

      {/* Right Section - changes based on auth state, NO page refresh needed */}
      <div className="spotify-user-section">
        {user ? (
          // ----- LOGGED IN STATE -----
          <>
            <div className="user-avatar">
              {getGreeting().charAt(0).toUpperCase()}
            </div>
            <span className="greeting-text">
              Welcome, <strong>{getGreeting()}</strong>
            </span>
            <button className="logout-btn" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          // ----- LOGGED OUT STATE: shows Sign In button instantly -----
          <button className="signin-btn">
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
