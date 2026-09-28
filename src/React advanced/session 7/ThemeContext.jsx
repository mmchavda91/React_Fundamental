import React, { createContext, useContext, useState } from "react";

// 1. Create ThemeContext
export const ThemeContext = createContext();

// 2. ThemeProvider: 'light' athva 'dark' state manage kare chhe
export const ThemeProvider = ({ children }) => {
  // Theme state: default 'light'
  const [theme, setTheme] = useState("light");

  // Theme toggle function: light mathi dark, dark mathi light
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom Hook: Context no data easily use karva mate
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeContext;
