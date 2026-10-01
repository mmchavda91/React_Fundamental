import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../Session 12/firebase';

const LiveCommentsFeed = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 5. Unsubscribe from the Firestore onSnapshot() listener when the component unmounts.
    const commentsRef = collection(db, 'comments');
    
    // We order by createdAt if the field exists, otherwise we can just query the collection
    // Note: requires a composite index if combining with other filters, but simple orderBy is fine if field exists.
    // For simplicity in case the user hasn't set up timestamps, let's just use a plain collection reference.
    // To strictly follow typical patterns:
    // const q = query(commentsRef, orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(commentsRef, (snapshot) => {
      const commentsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setComments(commentsList);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching live comments: ", error);
      setLoading(false);
    });

    // Cleanup function that unsubscribes when the component unmounts
    return () => {
      console.log("Unsubscribing from comments listener");
      unsubscribe();
    };
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
      <h2>Live Comments Feed</h2>
      
      {/* 4. Explanation of onSnapshot() */}
      <div style={{ background: '#f9f9f9', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
        <h3 style={{ marginTop: 0 }}>How onSnapshot() Works:</h3>
        <p style={{ marginBottom: 0 }}>
          Firestore's <strong>onSnapshot()</strong> method establishes an active real-time listener between our React app and the database. 
          Instead of manually fetching data with getDocs(), it automatically triggers a callback function whenever data in the 'comments' 
          collection changes (added, modified, or removed). In our <strong>LiveCommentsFeed</strong>, this instantly updates the 
          React state, causing a re-render so the UI stays perfectly in sync with the database without needing a page refresh.
        </p>
      </div>

      {loading ? (
        <p>Loading comments...</p>
      ) : comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {comments.map(comment => (
            <li key={comment.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
              <strong>{comment.user || 'Anonymous'}: </strong>
              <span>{comment.text || JSON.stringify(comment)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LiveCommentsFeed;
