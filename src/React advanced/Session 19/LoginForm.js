import React, { useState } from 'react';

// Q2. Simple authentication form using useState
// isLoggedIn boolean toggles between login form and welcome message
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Simulate successful login
    setError('');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  const styles = {
    container: {
      maxWidth: '420px',
      margin: '20px auto',
      padding: '30px',
      background: 'linear-gradient(135deg, #1e1e2e, #2a2a3e)',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
      fontFamily: "'Inter', sans-serif",
      color: '#e2e8f0',
    },
    title: {
      textAlign: 'center',
      fontSize: '1.6rem',
      fontWeight: '700',
      marginBottom: '24px',
      background: 'linear-gradient(90deg, #818cf8, #c084fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    inputGroup: {
      marginBottom: '16px',
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontSize: '0.85rem',
      color: '#a5b4fc',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '12px 14px',
      borderRadius: '10px',
      border: '1px solid #4c4f6b',
      background: '#0f0f1a',
      color: '#e2e8f0',
      fontSize: '0.95rem',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border 0.3s',
    },
    button: {
      width: '100%',
      padding: '12px',
      marginTop: '8px',
      borderRadius: '10px',
      border: 'none',
      background: 'linear-gradient(90deg, #6366f1, #a855f7)',
      color: '#fff',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'opacity 0.3s',
    },
    error: {
      color: '#f87171',
      fontSize: '0.85rem',
      marginTop: '8px',
      textAlign: 'center',
    },
    welcome: {
      textAlign: 'center',
    },
    welcomeTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#a3e635',
      marginBottom: '8px',
    },
    welcomeText: {
      color: '#94a3b8',
      marginBottom: '20px',
    },
    logoutBtn: {
      padding: '10px 28px',
      borderRadius: '10px',
      border: 'none',
      background: '#ef4444',
      color: '#fff',
      fontWeight: '600',
      cursor: 'pointer',
    },
  };

  if (isLoggedIn) {
    return (
      <div style={styles.container}>
        <div style={styles.welcome}>
          <div style={styles.welcomeTitle}>🎉 Welcome Back!</div>
          <p style={styles.welcomeText}>Logged in as: <strong style={{ color: '#818cf8' }}>{email}</strong></p>
          <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🔐 Login to PlaylistManager</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            id="s19-login-email"
            type="email"
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            id="s19-login-password"
            type="password"
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button id="s19-login-submit" type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
