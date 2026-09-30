import React, { useContext, useState } from 'react';
import { SpotifyContext, SpotifyProvider } from './SpotifyContext';
import './SpotifyApp.css';

// Using React.memo ensures that if the parent re-renders, 
// this component won't re-render unless its props or context change.
const Playlist = React.memo(() => {
  const { playlists } = useContext(SpotifyContext);
  
  // This log will only run when the playlist array changes, 
  // NOT every second when the playTime state in the Provider updates!
  console.log('🎵 Playlist component rendered!');

  return (
    <div className="playlist-sidebar">
      <h2>Your Library</h2>
      <ul>
        {playlists.map((pl, idx) => (
          <li key={idx}>🎵 {pl}</li>
        ))}
      </ul>
    </div>
  );
});

const MainContent = () => {
  const { addPlaylist } = useContext(SpotifyContext);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      addPlaylist(inputValue);
      setInputValue('');
    }
  };

  console.log('▶️ MainContent component rendered!');

  return (
    <div className="main-content">
      <h2>Add New Playlist</h2>
      <div className="add-controls">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Playlist name..."
        />
        <button onClick={handleAdd}>Create</button>
      </div>
      <p style={{ marginTop: '30px', color: '#b3b3b3', lineHeight: '1.6' }}>
        Notice how the <strong>Playing time</strong> timer in the header updates every second, 
        but the console logs show that the <code>Playlist</code> and <code>MainContent</code> components 
        do <strong>not</strong> re-render every second. This performance optimization is achieved 
        by memoizing the context value using <code>useMemo</code>!
      </p>
    </div>
  );
};

const SpotifyApp = () => {
  return (
    <SpotifyProvider>
      <div className="spotify-layout">
        <Playlist />
        <MainContent />
      </div>
    </SpotifyProvider>
  );
};

export default SpotifyApp;
