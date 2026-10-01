import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { fetchRestaurants } from './restaurantSlice';
import store from './store';

const RestaurantListComponent = () => {
  const [cityInput, setCityInput] = useState('Ahmedabad');
  const { list, loading, error } = useSelector(state => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    // Initial fetch
    dispatch(fetchRestaurants('Ahmedabad'));
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (cityInput.trim()) {
      dispatch(fetchRestaurants(cityInput));
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0', borderRadius: '8px' }}>
      <h2>Redux Thunk Restaurants (Session 16)</h2>
      
      <form onSubmit={handleSearch} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Enter city name..."
          style={{ padding: '8px', flex: 1 }}
        />
        <button type="submit" style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Search City
        </button>
      </form>

      {/* 3. Show loading message */}
      {loading && <p style={{ color: 'blue', fontWeight: 'bold' }}>Loading restaurants...</p>}
      
      {/* 4. Show error message */}
      {!loading && error && <p style={{ color: 'red', fontWeight: 'bold' }}>Error: {error}</p>}
      
      {!loading && !error && list.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {list.map(restaurant => (
            <li key={restaurant.id} style={{ padding: '10px', borderBottom: '1px solid #eee', background: '#f8f9fa', marginBottom: '5px' }}>
              <strong>{restaurant.name}</strong> 
              <span style={{ color: '#666', marginLeft: '10px' }}>
                ({restaurant.brewery_type || 'Restaurant'}) - {restaurant.city}, {restaurant.state}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const RestaurantList = () => (
  <Provider store={store}>
    <RestaurantListComponent />
  </Provider>
);

export default RestaurantList;
