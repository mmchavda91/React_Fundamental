import React, { createContext, useContext, useReducer } from "react";

// 1. Create ThemeContext
export const ThemeContext = createContext();

const themeReducer = (theme, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return theme === "light" ? "dark" : "light";
    case "SET_THEME":
      return action.payload;
    default:
      return theme;
  }
};

// 2. ThemeProvider: 'light' athva 'dark' state manage kare chhe
export const ThemeProvider = ({ children }) => {
  // Theme state: default 'light'
  const [theme, dispatch] = useReducer(themeReducer, "light");

  // Theme toggle function: light mathi dark, dark mathi light
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const setTheme = (nextTheme) => {
    if (nextTheme === "light" || nextTheme === "dark") {
      dispatch({ type: "SET_THEME", payload: nextTheme });
    }
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
