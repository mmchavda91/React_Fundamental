import React, { createContext, useContext, useReducer } from "react";

const FavoritesContext = createContext(null);

function favoritesReducer(favoriteIds, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return favoriteIds.includes(action.payload)
        ? favoriteIds
        : [...favoriteIds, action.payload];
    case "REMOVE_FAVORITE":
      return favoriteIds.filter((restaurantId) => restaurantId !== action.payload);
    default:
      return favoriteIds;
  }
}

export function FavoritesProvider({ children }) {
  const [favoriteIds, dispatch] = useReducer(favoritesReducer, []);

  const addFavorite = (restaurantId) => {
    dispatch({ type: "ADD_FAVORITE", payload: restaurantId });
  };

  const removeFavorite = (restaurantId) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: restaurantId });
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const favorites = useContext(FavoritesContext);
  if (!favorites) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }
  return favorites;
}