import React, { useContext } from 'react';
import { CartContext, CartProvider } from './CartContext';
import './CartApp.css';

const PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', price: 99.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 129.50 },
  { id: 3, name: 'Gaming Mouse', price: 59.99 },
  { id: 4, name: '4K Monitor', price: 349.00 },
];

const ProductList = () => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="product-list">
      <h2>Featured Products</h2>
      <div className="products">
        {PRODUCTS.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  // Calculate total number of items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-sidebar">
      <h2>Your Cart ({totalItems} items)</h2>
      
      {cart.length === 0 ? (
        <p className="empty-msg">Your cart is currently empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
                >
                  Remove All
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button 
              className="clear-btn"
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const CartApp = () => {
  return (
    <CartProvider>
      <div className="cart-app-container">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default CartApp;
