import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';

const AuthStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div style={styles.container}>
      {user ? (
        <>
          <p style={styles.text}>Logged in as: <strong>{user.email}</strong></p>
          <button onClick={handleLogout} style={styles.button}>Sign Out</button>
        </>
      ) : (
        <p style={styles.text}>Not logged in. Please sign in or sign up below.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#1a1a2e',
    color: '#fff',
    padding: '12px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif'
  },
  text: {
    margin: 0,
    fontSize: '16px'
  },
  button: {
    backgroundColor: '#e63946',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s'
  }
};

export default AuthStatus;
