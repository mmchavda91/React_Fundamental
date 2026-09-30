import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const Logout = () => {
  // This is the function you would get if you asked ChatGPT for a 
  // "React logout function using Firebase Auth"
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
      alert('You have been securely logged out!');
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Failed to log out: ' + error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button 
        onClick={handleLogout} 
        style={{
          padding: '12px 24px', 
          backgroundColor: '#ff4d4f', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        Sign Out Securely
      </button>
    </div>
  );
};

export default Logout;
