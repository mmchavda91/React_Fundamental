import React, { createContext, useState, useContext } from "react";

/**
 * ==============================================================================
 * React Context - Session 10 (Question 1)
 * ==============================================================================
 * Task:
 * Create a React Context called UserContext in a new file UserContext.js
 * and provide a default value with a username and a loggedIn status.
 * ==============================================================================
 */

// 1. Default value with username and loggedIn status
export const defaultUserData = {
  username: "Guest",
  loggedIn: false,
};

// 2. Create React Context called UserContext with the default value
export const UserContext = createContext(defaultUserData);

/**
 * UserProvider Component
 * Supplies dynamic user state, login, logout, and toggle functions to the component tree.
 */
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUserData);

  // Login action to set user details and loggedIn = true
  const login = (username = "Mamta Chavda") => {
    setUser({
      username,
      loggedIn: true,
    });
  };

  // Logout action to reset to Guest and loggedIn = false
  const logout = () => {
    setUser({
      username: "Guest",
      loggedIn: false,
    });
  };

  // Toggle login/logout status
  const toggleLogin = () => {
    setUser((prev) => ({
      username: prev.loggedIn ? "Guest" : "Mamta Chavda",
      loggedIn: !prev.loggedIn,
    }));
  };

  return (
    <UserContext.Provider value={{ ...user, login, logout, toggleLogin, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Custom Hook: useUser
 * Helper hook to consume UserContext easily in any component
 */
export const useUser = () => {
  return useContext(UserContext);
};

export default UserContext;
