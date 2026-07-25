import React, { useState } from "react";

function PlaylistAdder() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (song === "" || artist === "") {
      alert("Please enter both Song Name and Artist Name");
      return;
    }

    const newSong = {
      song: song,
      artist: artist,
    };

    setPlaylist([...playlist, newSong]);

    setSong("");
    setArtist("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🎵 Spotify Playlist Adder</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Song Name"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter Artist Name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Add Song
        </button>
      </form>

      <h3>Playlist</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {playlist.map((item, index) => (
          <li key={index}>
            🎶 {item.song} - {item.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistAdder;