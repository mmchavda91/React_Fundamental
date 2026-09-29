import React, { createContext, useState, useContext } from "react";

/**
 * React Context - UserContext
 *
 * 1. Create a React Context called UserContext in a new file UserContext.js
 * and provide a default value with a username and a loggedIn status.
 */

// Default value with username and loggedIn status
export const defaultUserData = {
  username: "Guest",
  loggedIn: false,
};

// 1. Create React Context called UserContext with the default value
export const UserContext = createContext(defaultUserData);

/**
 * UserProvider Component
 * Allows wrapping components to provide dynamic user state and updater functions.
 */
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUserData);

  const login = (username = "Mamta Chavda") => {
    setUser({
      username,
      loggedIn: true,
    });
  };

  const logout = () => {
    setUser({
      username: "Guest",
      loggedIn: false,
    });
  };

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
 * Allows consuming UserContext easily without manual useContext imports.
 */
export const useUser = () => {
  return useContext(UserContext);
};

export default UserContext;
