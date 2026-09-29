import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemeContent() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      style={{
        minHeight: "220px",
        padding: "24px",
        backgroundColor: isDark ? "#202124" : "#f5f7fa",
        color: isDark ? "#f1f3f4" : "#202124",
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          borderBottom: `1px solid ${isDark ? "#5f6368" : "#dadce0"}`,
          paddingBottom: "16px",
        }}
      >
        <div>
          <h1 style={{ margin: "0 0 8px" }}>Session 8: Theme Toggle</h1>
          <p aria-live="polite" style={{ margin: 0 }}>
            Current theme: <strong>{theme}</strong>
          </p>
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          aria-pressed={isDark}
          style={{ padding: "10px 14px", cursor: "pointer" }}
        >
          Switch to {isDark ? "light" : "dark"} mode
        </button>
      </header>
    </main>
  );
}

export default function ThemeReducerDemo() {
  return (
    <ThemeProvider>
      <ThemeContent />
    </ThemeProvider>
  );
}