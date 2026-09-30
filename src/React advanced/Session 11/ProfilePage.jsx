import React from 'react';

const ProfilePage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.avatar}>👤</div>
        <h1 style={styles.heading}>My Profile</h1>
        <p style={styles.subtext}>
          🔒 This is a <strong>protected page</strong>. You can see this because you are logged in!
        </p>
        <div style={styles.infoBox}>
          <p>✅ Account Active</p>
          <p>🎵 Premium Member</p>
          <p>📅 Joined: September 2026</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#f4f6f9'
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    padding: '40px',
    textAlign: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%'
  },
  avatar: {
    fontSize: '64px',
    marginBottom: '16px'
  },
  heading: {
    margin: '0 0 10px',
    color: '#333',
    fontSize: '28px'
  },
  subtext: {
    color: '#666',
    fontSize: '15px',
    marginBottom: '20px'
  },
  infoBox: {
    backgroundColor: '#f0fff4',
    border: '1px solid #c6f6d5',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'left',
    color: '#276749',
    lineHeight: '2'
  }
};

export default ProfilePage;
