import React, { useState, useRef } from "react";

function AddToPlaylist() {
  const [song, setSong] = useState("");
  const [playlist, setPlaylist] = useState([]);

  const inputRef = useRef();

  const handleAdd = () => {
    if (song.trim() === "") {
      return;
    }

    // Add song to playlist
    setPlaylist([...playlist, song]);

    // Clear input
    setSong("");

    // Focus input again
    inputRef.current.focus();
  };

  return (
    <div className="container mt-4">
      <h2>Add To Playlist</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter song name"
        value={song}
        onChange={(e) => setSong(e.target.value)}
        ref={inputRef}
      />

      <button className="btn btn-success mb-3" onClick={handleAdd}>
        Add
      </button>

      <h4>Playlist</h4>

      <ul className="list-group">
        {playlist.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddToPlaylist;