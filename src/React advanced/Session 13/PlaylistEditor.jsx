import React, { useState } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../Session 12/firebase';

const PlaylistEditor = () => {
  const [playlistId, setPlaylistId] = useState('');
  const [newName, setNewName] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    if (!playlistId || !newName) {
      setMessage('Please enter both Playlist ID and New Name');
      return;
    }

    try {
      const playlistRef = doc(db, 'playlists', playlistId);
      await updateDoc(playlistRef, {
        name: newName
      });
      setMessage('Playlist updated successfully!');
      setNewName('');
    } catch (error) {
      console.error("Error updating playlist: ", error);
      setMessage('Error updating playlist');
    }
  };

  const handleDelete = async () => {
    if (!playlistId) {
      setMessage('Please enter a Playlist ID to delete');
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this playlist?");
    if (confirmDelete) {
      try {
        const playlistRef = doc(db, 'playlists', playlistId);
        await deleteDoc(playlistRef);
        setMessage('Playlist deleted successfully!');
        setPlaylistId('');
      } catch (error) {
        console.error("Error deleting playlist: ", error);
        setMessage('Error deleting playlist');
      }
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
      <h2>Playlist Editor</h2>
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="text" 
          placeholder="Playlist ID" 
          value={playlistId} 
          onChange={(e) => setPlaylistId(e.target.value)} 
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input 
          type="text" 
          placeholder="New Playlist Name" 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
          style={{ marginRight: '10px', padding: '5px' }}
        />
      </div>
      <button onClick={handleUpdate} style={{ marginRight: '10px', padding: '5px 10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>Update Name</button>
      <button onClick={handleDelete} style={{ padding: '5px 10px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>Delete Playlist</button>
      {message && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{message}</p>}
    </div>
  );
};

export default PlaylistEditor;
