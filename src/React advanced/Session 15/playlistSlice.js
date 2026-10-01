import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [
    { id: '1', title: 'Bohemian Rhapsody', artist: 'Queen' }
  ]
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.songs.push(action.payload);
    },
    removeSong: (state, action) => {
      state.songs = state.songs.filter(song => song.id !== action.payload);
    }
  }
});

export const { addSong, removeSong } = playlistSlice.actions;
export default playlistSlice.reducer;
