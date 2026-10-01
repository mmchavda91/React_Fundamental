import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

const AddRestaurant = () => {
  const [name, setName]       = useState('');
  const [cuisine, setCuisine] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg]     = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');
    setLoading(true);

    try {
      // Add a new document to 'restaurants' Firestore collection
      const docRef = await addDoc(collection(db, 'restaurants'), {
        name:      name,
        cuisine:   cuisine,
        addedAt:   new Date().toISOString(),
      });

      console.log('Restaurant added with ID: ', docRef.id);
      setSuccessMsg(`✅ Restaurant "${name}" added successfully! (ID: ${docRef.id})`);

      // Reset form
      setName('');
      setCuisine('');
    } catch (error) {
      console.error('Error adding restaurant: ', error);
      setErrorMsg('❌ Failed to add restaurant: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🍽️ Add a Restaurant</h2>
        <p style={styles.subtext}>
          Fills the <strong>'restaurants'</strong> Firestore collection with a new document.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Restaurant Name */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="rest-name">Restaurant Name</label>
            <input
              id="rest-name"
              type="text"
              placeholder="e.g. Punjabi Tadka"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          {/* Cuisine Type */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="rest-cuisine">Cuisine Type</label>
            <select
              id="rest-cuisine"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              required
              style={styles.input}
            >
              <option value="">-- Select Cuisine --</option>
              <option value="North Indian">North Indian</option>
              <option value="South Indian">South Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Continental">Continental</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Rajasthani">Rajasthani</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Hyderabadi">Hyderabadi</option>
            </select>
          </div>

          {/* Messages */}
          {successMsg && <div style={styles.success}>{successMsg}</div>}
          {errorMsg   && <div style={styles.error}>{errorMsg}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{ ...styles.button, opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Adding...' : '➕ Add Restaurant to Firestore'}
          </button>
        </form>

        {/* How it works */}
        <div style={styles.codeBox}>
          <p style={styles.codeTitle}>📄 How the Firestore write works:</p>
          <code style={styles.code}>
            {`const docRef = await addDoc(`}<br/>
            {`  collection(db, 'restaurants'), {`}<br/>
            {`    name: "${name || 'Punjabi Tadka'}",`}<br/>
            {`    cuisine: "${cuisine || 'North Indian'}",`}<br/>
            {`    addedAt: new Date().toISOString()`}<br/>
            {`  }`}<br/>
            {`);`}
          </code>
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
    padding: '36px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '520px'
  },
  heading: {
    margin: '0 0 8px',
    color: '#e65100',
    fontSize: '24px'
  },
  subtext: {
    color: '#777',
    fontSize: '14px',
    marginBottom: '24px'
  },
  formGroup: {
    marginBottom: '18px'
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '600',
    color: '#444',
    fontSize: '14px'
  },
  input: {
    width: '100%',
    padding: '11px 14px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '15px',
    boxSizing: 'border-box',
    outline: 'none'
  },
  button: {
    width: '100%',
    padding: '13px',
    backgroundColor: '#e65100',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '6px'
  },
  success: {
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
    padding: '10px 14px',
    borderRadius: '6px',
    marginBottom: '14px',
    fontSize: '14px'
  },
  error: {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '10px 14px',
    borderRadius: '6px',
    marginBottom: '14px',
    fontSize: '14px'
  },
  codeBox: {
    marginTop: '24px',
    backgroundColor: '#1e1e1e',
    borderRadius: '8px',
    padding: '16px'
  },
  codeTitle: {
    color: '#9cdcfe',
    fontSize: '13px',
    margin: '0 0 8px'
  },
  code: {
    color: '#ce9178',
    fontFamily: 'monospace',
    fontSize: '13px',
    lineHeight: '1.8'
  }
};

export default AddRestaurant;
