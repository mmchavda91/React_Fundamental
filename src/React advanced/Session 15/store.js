import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './playlistSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    cart: cartReducer
  }
  // Redux Toolkit automatically configures Redux DevTools!
});

export default store;
