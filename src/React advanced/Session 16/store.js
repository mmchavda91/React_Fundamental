import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './restaurantSlice';

// Redux Toolkit comes with Redux Thunk middleware built-in by default
const store = configureStore({
  reducer: {
    restaurants: restaurantReducer
  }
});

export default store;
