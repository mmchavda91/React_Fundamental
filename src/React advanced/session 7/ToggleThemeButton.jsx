import React from "react";
import { useTheme } from "./ThemeContext";

/**
 * ToggleThemeButton Component (Session 7 - Question 3)
 * Aa component ThemeContext mathi `theme` ane `toggleTheme` consume kare chhe.
 * Click thavathi ThemeContext ma theme state update kare chhe,
 * jena lidhe context use karta badha j components (Navbar, PostCard, etc.)
 * instantly update thai jaay chhe.
 */
function ToggleThemeButton({ style = {}, showLabel = true, size = "medium" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // Size variations
  const sizeStyles = {
    small: {
      padding: "6px 12px",
      fontSize: "12px",
      gap: "6px",
    },
    medium: {
      padding: "9px 18px",
      fontSize: "14px",
      gap: "8px",
    },
    large: {
      padding: "12px 24px",
      fontSize: "16px",
      gap: "10px",
    },
  }[size] || {
    padding: "9px 18px",
    fontSize: "14px",
    gap: "8px",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "24px",
    border: isDark ? "1px solid #3f3f46" : "1px solid #cbd5e1",
    backgroundColor: isDark ? "#27272a" : "#f8fafc",
    color: isDark ? "#fbbf24" : "#1e293b",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: isDark
      ? "0 4px 14px rgba(0, 0, 0, 0.4)"
      : "0 4px 14px rgba(0, 0, 0, 0.08)",
    transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
    userSelect: "none",
    ...sizeStyles,
    ...style,
  };

  return (
    <button
      onClick={toggleTheme}
      style={buttonStyle}
      title={`Current Theme: ${theme}. Click to switch.`}
      aria-label="Toggle Theme"
    >
      {/* Icon with subtle animation */}
      <span style={{ fontSize: size === "large" ? "20px" : "16px", lineHeight: 1 }}>
        {isDark ? "☀️" : "🌙"}
      </span>

      {/* Label Text */}
      {showLabel && (
        <span>
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </span>
      )}
    </button>
  );
}

export default ToggleThemeButton;
