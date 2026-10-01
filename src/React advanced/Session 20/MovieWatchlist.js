import React, { useState, useEffect } from 'react';
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
  serverTimestamp,
  orderBy,
  query
} from 'firebase/firestore';
import firebaseApp from '../Session 9/firebase';

const db = getFirestore(firebaseApp);

// Q1 & Q4 - Movie Watchlist with Firebase Firestore backend
// Uses onSnapshot() for real-time updates
// Supports Add, Edit, Delete operations
const MovieWatchlist = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [status, setStatus] = useState('Want to Watch');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editGenre, setEditGenre] = useState('');
  const [editStatus, setEditStatus] = useState('');

  const statusOptions = ['Want to Watch', 'Watching', 'Watched'];
  const genreOptions = ['Action', 'Comedy', 'Drama', 'Thriller', 'Sci-Fi', 'Horror', 'Romance', 'Animation'];

  // Real-time listener using onSnapshot (like LiveCommentsFeed)
  useEffect(() => {
    const q = query(collection(db, 'movieWatchlist'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const moviesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMovies(moviesData);
        setLoading(false);
      },
      (err) => {
        console.error('Firestore error:', err);
        setError('Failed to load movies. Check Firestore connection.');
        setLoading(false);
      }
    );
    // Q5 in Session 13 pattern: unsubscribe on unmount
    return () => unsubscribe();
  }, []);

  // Add movie
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      await addDoc(collection(db, 'movieWatchlist'), {
        title: title.trim(),
        genre: genre || 'Other',
        status,
        createdAt: serverTimestamp(),
      });
      setTitle('');
      setGenre('');
      setStatus('Want to Watch');
    } catch (err) {
      setError('Failed to add movie: ' + err.message);
    }
  };

  // Delete movie
  const handleDelete = async (id) => {
    if (!window.confirm('Remove this movie from watchlist?')) return;
    try {
      await deleteDoc(doc(db, 'movieWatchlist', id));
    } catch (err) {
      setError('Failed to delete: ' + err.message);
    }
  };

  // Start editing
  const handleEditStart = (movie) => {
    setEditId(movie.id);
    setEditTitle(movie.title);
    setEditGenre(movie.genre);
    setEditStatus(movie.status);
  };

  // Save edit
  const handleEditSave = async (id) => {
    try {
      await updateDoc(doc(db, 'movieWatchlist', id), {
        title: editTitle,
        genre: editGenre,
        status: editStatus,
      });
      setEditId(null);
    } catch (err) {
      setError('Failed to update: ' + err.message);
    }
  };

  const statusColor = (s) => {
    if (s === 'Watched') return '#22c55e';
    if (s === 'Watching') return '#f59e0b';
    return '#818cf8';
  };

  const styles = {
    container: {
      maxWidth: '700px',
      margin: '20px auto',
      fontFamily: "'Inter', sans-serif",
    },
    header: {
      background: 'linear-gradient(135deg, #0f172a, #1a1a3e)',
      borderRadius: '20px 20px 0 0',
      padding: '28px 32px 20px',
      color: '#fff',
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: '900',
      margin: 0,
      background: 'linear-gradient(90deg, #f59e0b, #ef4444, #818cf8)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: {
      color: '#64748b',
      fontSize: '0.85rem',
      marginTop: '6px',
    },
    body: {
      background: '#0f172a',
      borderRadius: '0 0 20px 20px',
      padding: '24px 32px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    },
    form: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr auto',
      gap: '10px',
      marginBottom: '24px',
    },
    input: {
      padding: '11px 14px',
      borderRadius: '10px',
      border: '1px solid #334155',
      background: '#1e293b',
      color: '#e2e8f0',
      fontSize: '0.88rem',
      outline: 'none',
    },
    select: {
      padding: '11px 14px',
      borderRadius: '10px',
      border: '1px solid #334155',
      background: '#1e293b',
      color: '#e2e8f0',
      fontSize: '0.88rem',
      outline: 'none',
      cursor: 'pointer',
    },
    addBtn: {
      padding: '11px 22px',
      borderRadius: '10px',
      border: 'none',
      background: 'linear-gradient(90deg, #f59e0b, #ef4444)',
      color: '#fff',
      fontWeight: '700',
      cursor: 'pointer',
      fontSize: '0.9rem',
      whiteSpace: 'nowrap',
    },
    statsRow: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      flexWrap: 'wrap',
    },
    statBadge: (color) => ({
      padding: '6px 16px',
      borderRadius: '20px',
      background: color + '22',
      color,
      fontWeight: '700',
      fontSize: '0.8rem',
      border: `1px solid ${color}55`,
    }),
    movieCard: {
      background: '#1e293b',
      borderRadius: '14px',
      padding: '16px 20px',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      border: '1px solid #334155',
      transition: 'border 0.3s',
    },
    movieInfo: {
      flex: 1,
    },
    movieTitle: {
      fontWeight: '700',
      fontSize: '1rem',
      color: '#f1f5f9',
    },
    movieMeta: {
      fontSize: '0.78rem',
      color: '#64748b',
      marginTop: '4px',
    },
    statusPill: (s) => ({
      display: 'inline-block',
      padding: '3px 12px',
      borderRadius: '12px',
      background: statusColor(s) + '22',
      color: statusColor(s),
      fontSize: '0.75rem',
      fontWeight: '700',
      marginLeft: '8px',
    }),
    btnGroup: {
      display: 'flex',
      gap: '8px',
    },
    editBtn: {
      padding: '7px 14px',
      borderRadius: '8px',
      border: 'none',
      background: '#0ea5e9',
      color: '#fff',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '0.8rem',
    },
    deleteBtn: {
      padding: '7px 14px',
      borderRadius: '8px',
      border: 'none',
      background: '#ef4444',
      color: '#fff',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '0.8rem',
    },
    saveBtn: {
      padding: '7px 14px',
      borderRadius: '8px',
      border: 'none',
      background: '#22c55e',
      color: '#fff',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '0.8rem',
    },
    editInput: {
      padding: '6px 10px',
      borderRadius: '8px',
      border: '1px solid #6366f1',
      background: '#0f172a',
      color: '#e2e8f0',
      fontSize: '0.85rem',
      marginRight: '6px',
      width: '140px',
    },
    editSelect: {
      padding: '6px 10px',
      borderRadius: '8px',
      border: '1px solid #6366f1',
      background: '#0f172a',
      color: '#e2e8f0',
      fontSize: '0.85rem',
    },
    errorMsg: {
      color: '#f87171',
      background: '#7f1d1d33',
      padding: '10px 16px',
      borderRadius: '10px',
      marginBottom: '14px',
      fontSize: '0.85rem',
    },
    loadingMsg: {
      textAlign: 'center',
      color: '#64748b',
      padding: '30px',
    },
    emptyMsg: {
      textAlign: 'center',
      color: '#475569',
      padding: '30px',
      fontStyle: 'italic',
    },
    movieNum: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366f1, #a855f7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: '700',
      fontSize: '0.82rem',
      flexShrink: 0,
    },
  };

  const watched = movies.filter(m => m.status === 'Watched').length;
  const watching = movies.filter(m => m.status === 'Watching').length;
  const toWatch = movies.filter(m => m.status === 'Want to Watch').length;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>🎬 Movie Watchlist</h2>
        <p style={styles.subtitle}>Session 20 · Firebase Firestore · Real-time Sync</p>
      </div>

      <div style={styles.body}>
        {error && <div style={styles.errorMsg}>⚠️ {error}</div>}

        {/* Stats */}
        <div style={styles.statsRow}>
          <span style={styles.statBadge('#818cf8')}>📋 {toWatch} To Watch</span>
          <span style={styles.statBadge('#f59e0b')}>▶️ {watching} Watching</span>
          <span style={styles.statBadge('#22c55e')}>✅ {watched} Watched</span>
          <span style={styles.statBadge('#94a3b8')}>🎞️ {movies.length} Total</span>
        </div>

        {/* Add Form */}
        <form style={styles.form} onSubmit={handleAdd}>
          <input
            id="s20-movie-title"
            style={styles.input}
            placeholder="Movie title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            id="s20-movie-genre"
            style={styles.select}
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Genre</option>
            {genreOptions.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <select
            id="s20-movie-status"
            style={styles.select}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statusOptions.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <button id="s20-add-movie" type="submit" style={styles.addBtn}>+ Add</button>
        </form>

        {/* Movie List */}
        {loading ? (
          <p style={styles.loadingMsg}>⏳ Loading from Firestore...</p>
        ) : movies.length === 0 ? (
          <p style={styles.emptyMsg}>No movies yet. Add your first one! 🍿</p>
        ) : (
          movies.map((movie, idx) => (
            <div key={movie.id} style={styles.movieCard}>
              <div style={styles.movieNum}>{idx + 1}</div>

              {editId === movie.id ? (
                // Edit Mode
                <>
                  <div style={{ flex: 1, display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <input style={styles.editInput} value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                    <select style={styles.editSelect} value={editGenre} onChange={(e) => setEditGenre(e.target.value)}>
                      {genreOptions.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    <select style={styles.editSelect} value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
                      {statusOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={styles.btnGroup}>
                    <button style={styles.saveBtn} onClick={() => handleEditSave(movie.id)}>Save</button>
                    <button style={styles.deleteBtn} onClick={() => setEditId(null)}>Cancel</button>
                  </div>
                </>
              ) : (
                // View Mode
                <>
                  <div style={styles.movieInfo}>
                    <div style={styles.movieTitle}>
                      🎥 {movie.title}
                      <span style={styles.statusPill(movie.status)}>{movie.status}</span>
                    </div>
                    <div style={styles.movieMeta}>🎭 {movie.genre || 'Unknown'}</div>
                  </div>
                  <div style={styles.btnGroup}>
                    <button style={styles.editBtn} onClick={() => handleEditStart(movie)}>Edit</button>
                    <button
                      id={`s20-delete-${movie.id}`}
                      style={styles.deleteBtn}
                      onClick={() => handleDelete(movie.id)}
                    >
                      Remove
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieWatchlist;
