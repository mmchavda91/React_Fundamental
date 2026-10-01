import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

// This component verifies that Firestore is connected and working
const FirestoreSetupTest = () => {
  const [status, setStatus] = useState('Connecting to Firestore...');
  const [connected, setConnected] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Try to read from a 'test' collection in Firestore
        // (It's okay if the collection is empty, no error = success!)
        await getDocs(collection(db, 'test'));
        setStatus('✅ Firestore connected successfully!');
        setConnected(true);
      } catch (error) {
        setStatus('❌ Firestore connection failed: ' + error.message);
        setConnected(false);
      }
    };

    testConnection();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🔥 Firebase + Firestore Setup</h2>
        
        <div style={styles.section}>
          <h3 style={styles.subheading}>Step 1: Install Firebase</h3>
          <code style={styles.code}>npm install firebase</code>
          <p style={styles.note}>✅ Already installed in this project (firebase v12)</p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>Step 2: Firebase Config (.env)</h3>
          <code style={styles.code}>REACT_APP_FIREBASE_API_KEY="..."</code>
          <p style={styles.note}>Add your real Firebase project keys to the .env file</p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>Step 3: Initialize Firestore</h3>
          <code style={styles.code}>
            import {"{ getFirestore }"} from "firebase/firestore";<br />
            export const db = getFirestore(app);
          </code>
        </div>

        <div style={styles.section}>
          <h3 style={styles.subheading}>Step 4: Connection Status</h3>
          <div style={{
            ...styles.statusBox,
            backgroundColor: connected === true ? '#e8f5e9' 
                           : connected === false ? '#ffebee' 
                           : '#fff8e1',
            borderColor: connected === true ? '#a5d6a7' 
                       : connected === false ? '#ef9a9a' 
                       : '#ffe082',
          }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>{status}</p>
          </div>
          {connected === false && (
            <p style={styles.hint}>
              💡 Hint: Replace placeholder values in your <strong>.env</strong> file 
              with real Firebase config from Firebase Console → Project Settings.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '600px'
  },
  heading: {
    marginTop: 0,
    color: '#ff6f00',
    fontSize: '24px',
    borderBottom: '2px solid #ff6f00',
    paddingBottom: '10px'
  },
  section: {
    marginBottom: '20px'
  },
  subheading: {
    color: '#333',
    fontSize: '16px',
    marginBottom: '6px'
  },
  code: {
    display: 'block',
    backgroundColor: '#263238',
    color: '#80cbc4',
    padding: '10px 14px',
    borderRadius: '6px',
    fontFamily: 'monospace',
    fontSize: '13px',
    marginBottom: '6px'
  },
  note: {
    color: '#666',
    fontSize: '13px',
    margin: '4px 0 0'
  },
  statusBox: {
    border: '1px solid',
    borderRadius: '8px',
    padding: '14px 16px',
    marginTop: '6px'
  },
  hint: {
    color: '#e65100',
    fontSize: '13px',
    marginTop: '8px'
  }
};

export default FirestoreSetupTest;
