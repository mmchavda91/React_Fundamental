import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext(null);

function themeReducer(theme, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return theme === "light" ? "dark" : "light";
    default:
      return theme;
  }
}

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, "light");
  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}