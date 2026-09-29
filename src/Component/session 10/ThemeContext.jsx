import React, { createContext, useContext, useState } from "react";

/**
 * ==============================================================================
 * React Context - Session 10 (Question 3)
 * ==============================================================================
 * ThemeContext manages application theme state ('light' or 'dark')
 * and provides a function to toggle between them.
 * ==============================================================================
 */

// 1. Create ThemeContext with default value 'light'
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

/**
 * ThemeProvider Component
 * Manages theme state ('light' | 'dark') and wraps children to supply theme context
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom Hook: useTheme
 * Consumes ThemeContext easily in any functional component
 */
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeContext;
