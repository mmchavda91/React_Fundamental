import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Session 10/firebase';

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Wait for Firebase to confirm auth state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Auth state resolved
    });
    return () => unsubscribe();
  }, []);

  // Show loading while Firebase checks auth state (avoids flash redirect)
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '80vh',
        fontSize: '18px',
        color: '#888'
      }}>
        Checking authentication...
      </div>
    );
  }

  // If user is logged in, show the protected page
  // If NOT logged in, redirect to /session11-login
  return user ? children : <Navigate to="/session11-login" replace />;
};

export default PrivateRoute;
