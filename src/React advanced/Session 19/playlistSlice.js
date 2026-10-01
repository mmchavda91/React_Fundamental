import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [
    { id: 1, title: 'Shape of You', artist: 'Ed Sheeran' },
    { id: 2, title: 'Blinding Lights', artist: 'The Weeknd' }
  ]
};

const playlistSlice = createSlice({
  name: 'session19Playlist',
  initialState,
  reducers: {
    addSong: (state, action) => {
      const newSong = {
        id: Date.now(),
        title: action.payload.title,
        artist: action.payload.artist
      };
      state.songs.push(newSong);
    },
    // 5. Copilot-assisted editSong reducer logic
    editSong: (state, action) => {
      const index = state.songs.findIndex(song => song.id === action.payload.id);
      if (index !== -1) {
        state.songs[index] = {
          ...state.songs[index],
          title: action.payload.title,
          artist: action.payload.artist
        };
      }
    },
    deleteSong: (state, action) => {
      state.songs = state.songs.filter(song => song.id !== action.payload);
    }
  }
});

export const { addSong, editSong, deleteSong } = playlistSlice.actions;
export default playlistSlice.reducer;
