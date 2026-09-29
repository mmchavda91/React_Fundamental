import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * ==============================================================================
 * React Context - Session 10 (Question 3)
 * ==============================================================================
 * ThemeToggleButton Component
 * Uses useContext to access ThemeContext and toggle between 'light' and 'dark' themes.
 * ==============================================================================
 */
function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "10px 20px",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "30px",
        cursor: "pointer",
        border: isDark ? "1px solid #475569" : "1px solid #cbd5e1",
        backgroundColor: isDark ? "#1e293b" : "#f1f5f9",
        color: isDark ? "#fbbf24" : "#1e293b",
        boxShadow: isDark
          ? "0 4px 14px rgba(0, 0, 0, 0.4)"
          : "0 4px 14px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        outline: "none",
      }}
      title={`Current: ${theme}. Click to switch theme.`}
    >
      <span style={{ fontSize: "18px", lineHeight: 1 }}>
        {isDark ? "☀️" : "🌙"}
      </span>
      <span>
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </span>
    </button>
  );
}

export default ThemeToggleButton;
