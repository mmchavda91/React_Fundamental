import React, { useState } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { addSong, removeSong } from './playlistSlice';
import store from './store';

const PlaylistComponent = () => {
  const songs = useSelector(state => state.playlist.songs);
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleAddSong = (e) => {
    e.preventDefault();
    if (!title || !artist) return;
    
    const newSong = {
      id: Date.now().toString(),
      title,
      artist
    };
    
    dispatch(addSong(newSong));
    setTitle('');
    setArtist('');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0', borderRadius: '8px' }}>
      <h2>Spotify-style Playlist (Redux Toolkit)</h2>
      
      <form onSubmit={handleAddSong} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Song Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: '8px', flex: 1 }}
        />
        <input 
          type="text" 
          placeholder="Artist Name" 
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          style={{ padding: '8px', flex: 1 }}
        />
        <button type="submit" style={{ padding: '8px 16px', background: '#1db954', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Song
        </button>
      </form>

      {songs.length === 0 ? (
        <p>Your playlist is empty.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {songs.map(song => (
            <li key={song.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee', background: '#f9f9f9', marginBottom: '5px' }}>
              <div>
                <strong>{song.title}</strong> <br/>
                <small style={{ color: '#666' }}>{song.artist}</small>
              </div>
              <button 
                onClick={() => dispatch(removeSong(song.id))} 
                style={{ background: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Playlist = () => (
  <Provider store={store}>
    <PlaylistComponent />
  </Provider>
);

export default Playlist;
