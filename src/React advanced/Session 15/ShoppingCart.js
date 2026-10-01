import React from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { addToCart, removeFromCart } from './cartSlice';
import store from './store';

const products = [
  { id: '101', name: 'Wireless Headphones', price: 99 },
  { id: '102', name: 'Mechanical Keyboard', price: 120 }
];

const ShoppingCartComponent = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0', borderRadius: '8px' }}>
      <h2>Redux Shopping Cart (Refactored from Context)</h2>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1, padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}>
          <h3>Products</h3>
          {products.map(product => (
            <div key={product.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <span>{product.name} - ${product.price}</span>
              <button
                onClick={() => dispatch(addToCart(product))}
                style={{ background: '#007bff', color: 'white', border: 'none', padding: '3px 8px', borderRadius: '3px', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, padding: '10px', background: '#e9ecef', borderRadius: '5px' }}>
          <h3>Cart Items ({cartItems.length})</h3>
          {cartItems.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.name} - ${item.price}</span>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{ background: '#dc3545', color: 'white', border: 'none', padding: '3px 8px', borderRadius: '3px', cursor: 'pointer' }}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', background: '#e3f2fd', borderRadius: '5px' }}>
        <h4 style={{ marginTop: 0 }}>Context API vs Redux (For Shopping Cart)</h4>
        <p><strong>Advantage of Redux:</strong> Redux is excellent for debugging complex state changes (using Redux DevTools). It also prevents unnecessary re-renders much better than Context API, especially in large applications where many components might consume the same context but only need specific parts of it.</p>
        <p><strong>Disadvantage of Redux:</strong> It requires significantly more boilerplate code (actions, reducers, slices, store configuration, Provider setup) compared to the simpler, built-in setup of the React Context API.</p>
      </div>
    </div>
  );
};

const ShoppingCart = () => (
  <Provider store={store}>
    <ShoppingCartComponent />
  </Provider>
);

export default ShoppingCart;
