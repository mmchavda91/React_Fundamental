import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './playlistSlice';

export const store = configureStore({
  reducer: {
    session19Playlist: playlistReducer
  }
});
