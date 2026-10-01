import React, { useState } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { addSong, removeSong } from './actions';
import store from './store';

const PlaylistManagerComponent = () => {
  const [songInput, setSongInput] = useState('');
  const songs = useSelector(state => state.songs);
  const dispatch = useDispatch();

  const handleAddSong = () => {
    if (songInput.trim() !== '') {
      dispatch(addSong(songInput));
      setSongInput('');
    }
  };

  const handleRemoveSong = (index) => {
    dispatch(removeSong(index));
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0', borderRadius: '5px' }}>
      <h2>Redux Playlist Manager</h2>
      <div style={{ marginBottom: '15px' }}>
        <input 
          type="text" 
          placeholder="Enter a song name..." 
          value={songInput} 
          onChange={(e) => setSongInput(e.target.value)} 
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={handleAddSong} style={{ padding: '5px 10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
          Add Song
        </button>
      </div>

      {songs.length === 0 ? (
        <p>No songs in the playlist. Add one!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {songs.map((song, index) => (
            <li key={index} style={{ padding: '10px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f9f9f9', marginBottom: '5px' }}>
              <span>{song}</span>
              <button 
                onClick={() => handleRemoveSong(index)} 
                style={{ padding: '3px 8px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
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

// Wrapper with Provider so we don't need to wrap the whole App in Provider
const PlaylistManager = () => (
  <Provider store={store}>
    <PlaylistManagerComponent />
  </Provider>
);

export default PlaylistManager;
