import React, { createContext, useState, useMemo, useCallback } from 'react';

export const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState(['Top 50 - Global', 'Coding Mix', 'Workout Hits']);
  
  // Unrelated state that updates frequently (e.g. current playtime in seconds)
  // This will cause SpotifyProvider to re-render every second.
  const [playTime, setPlayTime] = useState(0);

  // A function to add a playlist, memoized so its reference doesn't change
  const addPlaylist = useCallback((newPlaylist) => {
    setPlaylists((prev) => [...prev, newPlaylist]);
  }, []);

  // HINT IMPLEMENTATION:
  // Memoize the context value object. 
  // If we didn't use useMemo and just passed {{ playlists, addPlaylist }}, a new object would be created 
  // every time `playTime` changes, causing all context consumers to re-render unnecessarily.
  const playlistContextValue = useMemo(() => {
    return {
      playlists,
      addPlaylist
    };
  }, [playlists, addPlaylist]);

  // Simulate play time increasing every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      setPlayTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="spotify-container">
      <header className="spotify-header">
        <h1>Spotify Clone</h1>
        <div className="player-status">Playing time: {playTime}s</div>
      </header>
      
      {/* We pass the memoized value to the provider */}
      <SpotifyContext.Provider value={playlistContextValue}>
        {children}
      </SpotifyContext.Provider>
    </div>
  );
};
