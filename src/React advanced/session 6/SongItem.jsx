import React from "react";

function SongItem({ song, onToggleFavorite }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "400px",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "8px"
      }}
    >
      <div>
        <h3>{song.name}</h3>
        <p>{song.artist}</p>
      </div>

      <button onClick={() => onToggleFavorite(song.id)}>
        {song.isFavorite ? "❤️ Favorite" : "🤍 Favorite"}
      </button>
    </div>
  );
}

export default SongItem;