import React from "react";
import { useTheme } from "./ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";

/**
 * Navbar Component (Session 7 - Question 2 & 3)
 * ThemeContext mathi theme consume kare chhe ane
 * background color light/dark theme pramane change kare chhe.
 */
function Navbar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Dynamic Navbar Styles based on current Theme
  const navStyle = {
    backgroundColor: isDark ? "#18181b" : "#ffffff",
    color: isDark ? "#f4f4f5" : "#1e293b",
    borderBottom: isDark ? "1px solid #27272a" : "1px solid #e2e8f0",
    boxShadow: isDark
      ? "0 4px 20px rgba(0, 0, 0, 0.5)"
      : "0 4px 20px rgba(0, 0, 0, 0.05)",
    padding: "14px 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
    transition: "all 0.3s ease",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "-0.5px",
    color: isDark ? "#60a5fa" : "#2563eb",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    fontSize: "14px",
    fontWeight: "500",
  };

  const linkItemStyle = {
    cursor: "pointer",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "all 0.2s ease",
    color: isDark ? "#d4d4d8" : "#4b5563",
  };

  const badgeStyle = {
    fontSize: "11px",
    padding: "3px 8px",
    borderRadius: "12px",
    backgroundColor: isDark ? "#3b82f633" : "#dbeafe",
    color: isDark ? "#93c5fd" : "#1d4ed8",
    fontWeight: "600",
    textTransform: "uppercase",
  };

  return (
    <nav style={navStyle}>
      {/* Brand / Logo */}
      <div style={logoStyle}>
        <span style={{ fontSize: "24px" }}>🧭</span>
        <span>ThemeFeed</span>
        <span style={badgeStyle}>Navbar (Direct Consumer)</span>
      </div>

      {/* Nav Links */}
      <ul style={navLinksStyle}>
        <li style={{ ...linkItemStyle, color: isDark ? "#ffffff" : "#000000", fontWeight: "600" }}>Home</li>
        <li style={linkItemStyle}>Explore</li>
        <li style={linkItemStyle}>Messages</li>
        <li style={linkItemStyle}>Settings</li>
      </ul>

      {/* Theme Status & ToggleThemeButton Component (Session 7 Q-3) */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "12px", color: isDark ? "#a1a1aa" : "#64748b" }}>
          Current: <strong>{theme}</strong>
        </span>
        {/* ToggleThemeButton used here */}
        <ToggleThemeButton size="small" />
      </div>
    </nav>
  );
}

export default Navbar;
