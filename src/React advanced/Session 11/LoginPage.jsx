import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Session 10/firebase';

const LoginPage = () => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState(null);
  const [loading, setLoading]   = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/session11-profile'); // Redirect to profile after login
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🔐 Sign In to Continue</h2>
        <p style={styles.subtext}>You must be logged in to access that page.</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex', justifyContent: 'center',
    alignItems: 'center', minHeight: '80vh',
    backgroundColor: '#f4f6f9'
  },
  card: {
    background: 'white', borderRadius: '12px',
    padding: '40px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    width: '100%', maxWidth: '400px'
  },
  heading: { margin: '0 0 8px', color: '#333', textAlign: 'center' },
  subtext: { color: '#888', textAlign: 'center', marginBottom: '24px', fontSize: '14px' },
  input: {
    width: '100%', padding: '12px', marginBottom: '14px',
    border: '1px solid #ccc', borderRadius: '6px',
    fontSize: '16px', boxSizing: 'border-box'
  },
  button: {
    width: '100%', padding: '13px',
    backgroundColor: '#1DB954', color: '#000',
    border: 'none', borderRadius: '6px',
    fontSize: '16px', fontWeight: '700', cursor: 'pointer'
  },
  error: { color: '#d32f2f', fontSize: '14px', marginBottom: '12px' }
};

export default LoginPage;
