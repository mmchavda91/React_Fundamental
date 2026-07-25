import React from "react";
const songs = [
  {
    title: "Kesariya",
    artist: "Arijit Singh",
  },
  {
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
  },
  {
    title: "Apna Bana Le",
    artist: "Arijit Singh",
  },
  {
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal",
  },
];

function Playlist({ songs }) {
  return (
    <div>
      <h2>My Playlist</h2>

      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <strong>{song.title}</strong> - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;