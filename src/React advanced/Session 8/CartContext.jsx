import React, { createContext, useReducer } from 'react';

/* 
  ==============================================================
  HINT REQUIREMENT: Prompt and Generated Code
  ==============================================================
  
  PROMPT SUBMITTED TO AI: 
  "Write a React useReducer function for a shopping cart. The state should be an array of items. 
  It should handle three actions: 'ADD_ITEM' (adds an item or increments quantity if it exists), 
  'REMOVE_ITEM' (removes an item by id), and 'CLEAR_CART' (empties the cart)."

  GENERATED REDUCER CODE (used below):
*/

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      // Check if item already exists in the cart
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        // Item exists, increment its quantity
        const updatedCart = [...state];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1
        };
        return updatedCart;
      }
      // Item does not exist, add it with quantity 1
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case 'REMOVE_ITEM':
      // Filter out the item with the matching id
      return state.filter(item => item.id !== action.payload.id);
    case 'CLEAR_CART':
      // Empty the cart
      return [];
    default:
      return state;
  }
};

// --------------------------------------------------------------
// Context and Provider setup
// --------------------------------------------------------------

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
