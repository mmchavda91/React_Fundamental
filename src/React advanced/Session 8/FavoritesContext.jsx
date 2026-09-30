import React, { createContext, useReducer } from 'react';

// Initial state: array of restaurant IDs
const initialState = {
  favorites: [],
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      // Prevent duplicates
      if (state.favorites.includes(action.payload)) return state;
      return { favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return { favorites: state.favorites.filter((id) => id !== action.payload) };
    default:
      return state;
  }
};

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  return (
    <FavoritesContext.Provider value={{ favorites: state.favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};
