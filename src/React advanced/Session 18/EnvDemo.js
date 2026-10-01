import React from 'react';
import firebaseConfig from './firebase';

// Session 18 - Environment Variables Demo Component
// Q1: Display REACT_APP_SPOTIFY_API_KEY from .env.local
// Q2: Firebase config reads from process.env (see firebase.js)
// Q3: REACT_APP_WELCOME_MSG differs in .env.development vs .env.production
// Q4: All API keys moved to .env files; .env* listed in .gitignore

const EnvDemo = () => {
  const spotifyKey = process.env.REACT_APP_SPOTIFY_API_KEY;
  const firebaseKey = process.env.REACT_APP_FIREBASE_API_KEY;
  const welcomeMsg = process.env.REACT_APP_WELCOME_MSG;
  const nodeEnv = process.env.NODE_ENV;

  const styles = {
    container: {
      maxWidth: '640px',
      margin: '20px auto',
      fontFamily: "'Inter', sans-serif",
    },
    card: {
      background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
      borderRadius: '18px',
      padding: '28px',
      color: '#e2e8f0',
      boxShadow: '0 10px 40px rgba(99,102,241,0.25)',
      marginBottom: '16px',
    },
    heading: {
      fontSize: '1.5rem',
      fontWeight: '800',
      marginBottom: '20px',
      background: 'linear-gradient(90deg, #f59e0b, #ef4444)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    row: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '14px',
      gap: '12px',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '10px',
      padding: '12px 16px',
      borderLeft: '4px solid #6366f1',
    },
    label: {
      fontSize: '0.78rem',
      color: '#94a3b8',
      fontWeight: '600',
      minWidth: '240px',
      fontFamily: 'monospace',
    },
    value: {
      fontSize: '0.88rem',
      color: '#a3e635',
      fontWeight: '600',
      wordBreak: 'break-all',
      fontFamily: 'monospace',
    },
    notFound: {
      color: '#f87171',
      fontStyle: 'italic',
    },
    envBadge: {
      display: 'inline-block',
      padding: '4px 14px',
      borderRadius: '20px',
      background: nodeEnv === 'production' ? '#ef4444' : '#22c55e',
      color: '#fff',
      fontWeight: '700',
      fontSize: '0.82rem',
      marginBottom: '18px',
    },
    sectionTitle: {
      fontSize: '0.9rem',
      color: '#818cf8',
      fontWeight: '600',
      marginBottom: '10px',
      marginTop: '8px',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
    gitignoreBox: {
      background: '#0f0f1a',
      borderRadius: '10px',
      padding: '14px',
      fontFamily: 'monospace',
      fontSize: '0.82rem',
      color: '#4ade80',
      marginTop: '12px',
    },
    gitignoreLine: {
      color: '#94a3b8',
      marginBottom: '3px',
    },
    highlight: {
      color: '#f87171',
      fontWeight: '700',
    },
  };

  return (
    <div style={styles.container}>
      {/* Main Card */}
      <div style={styles.card}>
        <h2 style={styles.heading}>🔐 Session 18 - Environment Variables</h2>

        {/* Current Environment Badge */}
        <div>
          <span style={styles.envBadge}>
            {nodeEnv === 'production' ? '🚀 PRODUCTION' : '🛠️ DEVELOPMENT'} MODE
          </span>
        </div>

        {/* Q3: Welcome Message - changes per environment */}
        <p style={styles.sectionTitle}>Q3 — Welcome Message (changes per environment)</p>
        <div style={styles.row}>
          <span style={styles.label}>REACT_APP_WELCOME_MSG</span>
          <span style={styles.value}>{welcomeMsg || <span style={styles.notFound}>Not defined</span>}</span>
        </div>

        {/* Q1: Spotify API Key */}
        <p style={styles.sectionTitle}>Q1 — Spotify API Key (.env.local)</p>
        <div style={styles.row}>
          <span style={styles.label}>REACT_APP_SPOTIFY_API_KEY</span>
          <span style={styles.value}>{spotifyKey || <span style={styles.notFound}>Not found</span>}</span>
        </div>

        {/* Q2: Firebase API Key from process.env */}
        <p style={styles.sectionTitle}>Q2 — Firebase Config (from process.env, not hardcoded)</p>
        <div style={styles.row}>
          <span style={styles.label}>REACT_APP_FIREBASE_API_KEY</span>
          <span style={styles.value}>{firebaseKey || <span style={styles.notFound}>Not found</span>}</span>
        </div>
        <div style={styles.row}>
          <span style={styles.label}>firebaseConfig.apiKey (via firebase.js)</span>
          <span style={styles.value}>{firebaseConfig.apiKey || <span style={styles.notFound}>Not found</span>}</span>
        </div>

        {/* Q4: .gitignore - API keys not committed */}
        <p style={styles.sectionTitle}>Q4 — .gitignore protects API keys</p>
        <div style={styles.gitignoreBox}>
          <div style={styles.gitignoreLine}># .gitignore</div>
          <div style={styles.gitignoreLine}>/node_modules</div>
          <div style={styles.highlight}>.env.local ✅ ignored</div>
          <div style={styles.highlight}>.env* ✅ all env files ignored</div>
          <div style={styles.gitignoreLine}>/build</div>
        </div>
      </div>
    </div>
  );
};

export default EnvDemo;
