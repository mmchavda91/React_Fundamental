import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        // getDocs() fetches all documents from the 'restaurants' collection
        const querySnapshot = await getDocs(collection(db, 'restaurants'));

        // Map over the documents and extract id + data
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,         // Firestore auto-generated document ID
          ...doc.data()       // Spread document fields (name, cuisine, addedAt)
        }));

        setRestaurants(data);
      } catch (err) {
        console.error('Error fetching restaurants:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Emoji map for cuisine types
  const cuisineEmoji = {
    'North Indian':  '🍛',
    'South Indian':  '🥘',
    'Chinese':       '🥢',
    'Italian':       '🍕',
    'Mexican':       '🌮',
    'Continental':   '🥗',
    'Gujarati':      '🫓',
    'Rajasthani':    '🌶️',
    'Fast Food':     '🍔',
    'Hyderabadi':    '🍖',
  };

  if (loading) {
    return (
      <div style={styles.center}>
        <p style={{ color: '#888' }}>⏳ Fetching restaurants from Firestore...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.center}>
        <div style={styles.errorBox}>
          <p>❌ Error: {error}</p>
          <p style={{ fontSize: '13px', color: '#888' }}>
            Make sure your Firebase config is set in <strong>.env</strong> and Firestore is enabled.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🍽️ Restaurants from Firestore</h2>
        <p style={styles.subtext}>
          Fetched using <code>getDocs(collection(db, 'restaurants'))</code>
        </p>

        {restaurants.length === 0 ? (
          <div style={styles.emptyBox}>
            <p>📭 No restaurants found in Firestore.</p>
            <p style={{ fontSize: '13px', color: '#888' }}>
              Use the <strong>"Add Restaurant"</strong> form above to add some!
            </p>
          </div>
        ) : (
          <>
            <p style={styles.count}>Total: <strong>{restaurants.length}</strong> restaurant(s) found</p>
            <ul style={styles.list}>
              {restaurants.map((restaurant) => (
                <li key={restaurant.id} style={styles.listItem}>
                  <div style={styles.emoji}>
                    {cuisineEmoji[restaurant.cuisine] || '🍽️'}
                  </div>
                  <div style={styles.info}>
                    <h3 style={styles.name}>{restaurant.name}</h3>
                    <span style={styles.badge}>{restaurant.cuisine}</span>
                    {restaurant.addedAt && (
                      <p style={styles.date}>
                        Added: {new Date(restaurant.addedAt).toLocaleString()}
                      </p>
                    )}
                  </div>
                  <div style={styles.idTag}>ID: {restaurant.id.slice(0, 8)}...</div>
                </li>
              ))}
            </ul>
          </>
        )}
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
    maxWidth: '580px'
  },
  heading: {
    margin: '0 0 8px',
    color: '#e65100',
    fontSize: '24px'
  },
  subtext: {
    color: '#777',
    fontSize: '13px',
    marginBottom: '20px'
  },
  count: {
    color: '#555',
    fontSize: '14px',
    marginBottom: '12px'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '14px 16px',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '1px solid #f0f0f0',
    backgroundColor: '#fafafa',
    transition: 'box-shadow 0.2s'
  },
  emoji: {
    fontSize: '32px',
    minWidth: '40px',
    textAlign: 'center'
  },
  info: {
    flex: 1
  },
  name: {
    margin: '0 0 4px',
    fontSize: '17px',
    color: '#222'
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#fff3e0',
    color: '#e65100',
    padding: '2px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600'
  },
  date: {
    margin: '4px 0 0',
    fontSize: '11px',
    color: '#aaa'
  },
  idTag: {
    fontSize: '11px',
    color: '#bbb',
    fontFamily: 'monospace'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px'
  },
  errorBox: {
    background: '#ffebee',
    border: '1px solid #ef9a9a',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '500px',
    color: '#c62828'
  },
  emptyBox: {
    textAlign: 'center',
    padding: '30px',
    color: '#666',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px dashed #ddd'
  }
};

export default RestaurantList;
