import React, { useCallback, useState } from "react";
import SongItem from "./SongItem";

function PlaylistManager() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      name: "Shape of You",
      artist: "Ed Sheeran",
      isFavorite: false
    },
    {
      id: 2,
      name: "Believer",
      artist: "Imagine Dragons",
      isFavorite: false
    },
    {
      id: 3,
      name: "Perfect",
      artist: "Ed Sheeran",
      isFavorite: false
    },
    {
      id: 4,
      name: "Blinding Lights",
      artist: "The Weeknd",
      isFavorite: false
    },
    {
      id: 5,
      name: "Levitating",
      artist: "Dua Lipa",
      isFavorite: false
    }
  ]);

  // useCallback favorite toggle function ko memoize karta hai
  const toggleFavorite = useCallback((id) => {
    setSongs((previousSongs) =>
      previousSongs.map((song) =>
        song.id === id
          ? {
              ...song,
              isFavorite: !song.isFavorite
            }
          : song
      )
    );
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎵 Playlist Manager</h1>

      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default PlaylistManager;