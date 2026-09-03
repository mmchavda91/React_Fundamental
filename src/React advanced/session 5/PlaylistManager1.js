import React, { useReducer, useState } from "react";
import PlaylistReducer from "./PlaylistReducer";

function PlaylistManager1() {
  const [songs, dispatch] = useReducer(PlaylistReducer, [
    // "Shape of You",
    // "Perfect",
    // "Believer"
  ]);

  const [songName, setSongName] = useState("");

  const addSong = () => {
    if (songName.trim() === "") {
      return;
    }

    dispatch({
       type: "ADD_SONG",
      payload: {
        id: Date.now(),
        name: songName
      }
    });

    setSongName("");
  };

  return (
    <div>
      <h2>🎵 My Playlist</h2>

      <input
        type="text"
        placeholder="Enter song name"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
      />

      <button onClick={addSong}>
        Add
      </button>

      <h3>Song List:</h3>

     <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.name}

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_SONG",
                  payload: song.id
                })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistManager1;