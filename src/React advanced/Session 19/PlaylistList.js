import React, { useState } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { deleteSong, addSong, editSong } from './playlistSlice';
import { store } from './store';

// Q4. PlaylistList component - displays songs from Redux store with Remove button
// Q5. editSong reducer handles editing by id (Copilot-assisted logic in playlistSlice.js)
const PlaylistListInner = () => {
  const songs = useSelector((state) => state.session19Playlist.songs);
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState('');
  const [newArtist, setNewArtist] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editArtist, setEditArtist] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newArtist.trim()) return;
    dispatch(addSong({ title: newTitle.trim(), artist: newArtist.trim() }));
    setNewTitle('');
    setNewArtist('');
  };

  const handleEditStart = (song) => {
    setEditId(song.id);
    setEditTitle(song.title);
    setEditArtist(song.artist);
  };

  const handleEditSave = (id) => {
    dispatch(editSong({ id, title: editTitle, artist: editArtist }));
    setEditId(null);
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '20px auto',
      padding: '28px',
      background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
      borderRadius: '18px',
      boxShadow: '0 10px 40px rgba(99,102,241,0.25)',
      fontFamily: "'Inter', sans-serif",
      color: '#e2e8f0',
    },
    title: {
      textAlign: 'center',
      fontSize: '1.7rem',
      fontWeight: '800',
      marginBottom: '24px',
      background: 'linear-gradient(90deg, #818cf8, #34d399)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    addForm: {
      display: 'flex',
      gap: '10px',
      marginBottom: '24px',
      flexWrap: 'wrap',
    },
    input: {
      flex: '1',
      minWidth: '120px',
      padding: '10px 14px',
      borderRadius: '10px',
      border: '1px solid #4c4f6b',
      background: '#0f0f1a',
      color: '#e2e8f0',
      fontSize: '0.9rem',
      outline: 'none',
    },
    addBtn: {
      padding: '10px 20px',
      borderRadius: '10px',
      border: 'none',
      background: 'linear-gradient(90deg, #6366f1, #a855f7)',
      color: '#fff',
      fontWeight: '600',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
    songItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 18px',
      marginBottom: '10px',
      background: 'rgba(99,102,241,0.1)',
      borderRadius: '12px',
      border: '1px solid rgba(99,102,241,0.2)',
      transition: 'background 0.3s',
    },
    songInfo: {
      flex: 1,
    },
    songTitle: {
      fontWeight: '700',
      fontSize: '1rem',
      color: '#c7d2fe',
    },
    songArtist: {
      fontSize: '0.82rem',
      color: '#94a3b8',
      marginTop: '3px',
    },
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
      fontSize: '0.82rem',
    },
    removeBtn: {
      padding: '7px 14px',
      borderRadius: '8px',
      border: 'none',
      background: '#ef4444',
      color: '#fff',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '0.82rem',
    },
    saveBtn: {
      padding: '7px 14px',
      borderRadius: '8px',
      border: 'none',
      background: '#22c55e',
      color: '#fff',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '0.82rem',
    },
    editInput: {
      padding: '6px 10px',
      borderRadius: '8px',
      border: '1px solid #6366f1',
      background: '#0f0f1a',
      color: '#e2e8f0',
      fontSize: '0.88rem',
      marginRight: '6px',
      width: '130px',
    },
    emptyMsg: {
      textAlign: 'center',
      color: '#64748b',
      padding: '20px 0',
      fontStyle: 'italic',
    },
    countBadge: {
      textAlign: 'center',
      marginBottom: '16px',
      color: '#818cf8',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎵 PlaylistManager - Session 19</h2>

      {/* Add Song Form */}
      <form style={styles.addForm} onSubmit={handleAdd}>
        <input
          id="s19-add-title"
          style={styles.input}
          placeholder="Song Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          id="s19-add-artist"
          style={styles.input}
          placeholder="Artist Name"
          value={newArtist}
          onChange={(e) => setNewArtist(e.target.value)}
        />
        <button id="s19-add-btn" type="submit" style={styles.addBtn}>+ Add Song</button>
      </form>

      <p style={styles.countBadge}>{songs.length} song{songs.length !== 1 ? 's' : ''} in playlist</p>

      {songs.length === 0 ? (
        <p style={styles.emptyMsg}>No songs yet. Add one above!</p>
      ) : (
        songs.map((song) => (
          <div key={song.id} style={styles.songItem}>
            {editId === song.id ? (
              // Inline edit mode
              <>
                <div style={{ flex: 1, display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <input
                    style={styles.editInput}
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <input
                    style={styles.editInput}
                    value={editArtist}
                    onChange={(e) => setEditArtist(e.target.value)}
                  />
                </div>
                <div style={styles.btnGroup}>
                  <button style={styles.saveBtn} onClick={() => handleEditSave(song.id)}>Save</button>
                  <button style={styles.removeBtn} onClick={() => setEditId(null)}>Cancel</button>
                </div>
              </>
            ) : (
              // Normal display mode
              <>
                <div style={styles.songInfo}>
                  <div style={styles.songTitle}>🎵 {song.title}</div>
                  <div style={styles.songArtist}>🎤 {song.artist}</div>
                </div>
                <div style={styles.btnGroup}>
                  <button style={styles.editBtn} onClick={() => handleEditStart(song)}>Edit</button>
                  <button
                    id={`s19-remove-${song.id}`}
                    style={styles.removeBtn}
                    onClick={() => dispatch(deleteSong(song.id))}
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
  );
};

// Wrap with Provider so it can be used standalone in App.js
const PlaylistList = () => (
  <Provider store={store}>
    <PlaylistListInner />
  </Provider>
);

export default PlaylistList;
