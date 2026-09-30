import React, { createContext, useReducer } from 'react';

// 1. Define initial state
const initialState = {
  theme: 'light', // Can be 'light' or 'dark'
};

// 2. Define the reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

// 3. Create Context
export const ThemeContext = createContext();

// 4. Create a Provider component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
