import React, { useContext } from 'react';
import { UserContext, UserProvider } from './UserContext';
import { FavoritesContext, FavoritesProvider } from './FavoritesContext';
import './ZomatoApp.css';

// Dummy Restaurant Data
const RESTAURANTS = [
  { id: '1', name: 'Spicy Delight', cuisine: 'Indian', rating: '4.5' },
  { id: '2', name: 'Pasta Paradise', cuisine: 'Italian', rating: '4.8' },
  { id: '3', name: 'Burger Haven', cuisine: 'American', rating: '4.2' },
  { id: '4', name: 'Sushi Zen', cuisine: 'Japanese', rating: '4.9' },
  { id: '5', name: 'Taco Fiesta', cuisine: 'Mexican', rating: '4.6' },
  { id: '6', name: 'Wok this Way', cuisine: 'Chinese', rating: '4.3' }
];

const Navbar = () => {
  const { user } = useContext(UserContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="zomato-navbar">
      <div className="brand">Zomato Clone</div>
      <div className="user-info">
        <span>Welcome, <strong>{user.name}</strong></span>
        <span>|</span>
        <span>❤️ Favorites: {favorites.length}</span>
      </div>
    </nav>
  );
};

const RestaurantList = () => {
  const { favorites, dispatch } = useContext(FavoritesContext);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: id });
    }
  };

  return (
    <div className="restaurant-list">
      {RESTAURANTS.map((restaurant) => {
        const isFavorite = favorites.includes(restaurant.id);
        return (
          <div key={restaurant.id} className="restaurant-card">
            <h3>{restaurant.name}</h3>
            <p>{restaurant.cuisine}</p>
            <p>⭐ {restaurant.rating}</p>
            <button 
              className={`fav-btn ${isFavorite ? 'active' : ''}`}
              onClick={() => toggleFavorite(restaurant.id)}
            >
              {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

const ZomatoApp = () => {
  return (
    <UserProvider>
      <FavoritesProvider>
        <div className="zomato-app-container">
          <Navbar />
          <main className="zomato-content">
            <h2>Popular Restaurants Near You</h2>
            <RestaurantList />
          </main>
        </div>
      </FavoritesProvider>
    </UserProvider>
  );
};

export default ZomatoApp;
