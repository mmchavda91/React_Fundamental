import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null, // Example structure: { username: 'johndoe', displayName: 'John Doe' }
};

// Reducer function to handle auth actions
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        user: action.payload, // payload contains user details
      };
    case 'LOGOUT':
      return {
        isAuthenticated: false,
        user: null,
      };
    // NEW ACTION: Update display name
    case 'UPDATE_DISPLAY_NAME':
      return {
        ...state,
        user: {
          ...state.user, // Copy existing user properties (like username)
          displayName: action.payload, // Update the display name
        },
      };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
