import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";

/**
 * ==============================================================================
 * React Context - Session 10 (Question 3)
 * ==============================================================================
 * ThemeContent Component
 * Reads current theme from ThemeContext using useContext and dynamically updates
 * the background color and text color of the main div.
 * ==============================================================================
 */
function ThemeContent() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  // Main div style that updates background color and color dynamically
  const mainDivStyle = {
    backgroundColor: isDark ? "#0f172a" : "#ffffff",
    color: isDark ? "#f8fafc" : "#0f172a",
    minHeight: "360px",
    padding: "32px 28px",
    borderRadius: "16px",
    border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
    boxShadow: isDark
      ? "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)"
      : "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
    transition: "background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    marginTop: "20px",
    fontFamily: "'Segoe UI', Roboto, sans-serif",
  };

  const cardStyle = {
    backgroundColor: isDark ? "#1e293b" : "#f1f5f9",
    color: isDark ? "#e2e8f0" : "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
    transition: "all 0.35s ease",
  };

  return (
    <div style={mainDivStyle}>
      {/* Header Row with Title and Toggle Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          borderBottom: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
          paddingBottom: "16px",
        }}
      >
        <div>
          <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700" }}>
            🎨 Session 10 - Question 3: Theme Switcher
          </h3>
          <p
            style={{
              margin: "4px 0 0 0",
              fontSize: "14px",
              color: isDark ? "#94a3b8" : "#64748b",
            }}
          >
            Context API વડે dynamic background color update
          </p>
        </div>

        {/* Toggle Button Component */}
        <ThemeToggleButton />
      </div>

      {/* Main Info Card */}
      <div style={cardStyle}>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>
          Current Active Theme:{" "}
          <span
            style={{
              padding: "4px 10px",
              borderRadius: "6px",
              fontWeight: "700",
              textTransform: "uppercase",
              fontSize: "12px",
              backgroundColor: isDark ? "#38bdf8" : "#2563eb",
              color: "#ffffff",
              display: "inline-block",
              marginLeft: "6px",
            }}
          >
            {theme}
          </span>
        </h4>
        <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
          The background color of this main container is currently set to{" "}
          <code
            style={{
              backgroundColor: isDark ? "#0f172a" : "#e2e8f0",
              padding: "2px 6px",
              borderRadius: "4px",
              color: isDark ? "#38bdf8" : "#0284c7",
            }}
          >
            {isDark ? "#0f172a (Dark Slate)" : "#ffffff (Pure White)"}
          </code>
          . Clicking the toggle button triggers <code>toggleTheme()</code> in{" "}
          <code>ThemeContext</code>, causing this component to automatically re-render with the new styles.
        </p>
      </div>

      {/* Feature Highlights Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        <div style={cardStyle}>
          <div style={{ fontSize: "24px", marginBottom: "6px" }}>⚡</div>
          <strong>Context API</strong>
          <p style={{ margin: "6px 0 0 0", fontSize: "13px", color: isDark ? "#94a3b8" : "#64748b" }}>
            No prop drilling needed. Theme state is stored globally in <code>ThemeContext</code>.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: "24px", marginBottom: "6px" }}>🔄</div>
          <strong>useContext Hook</strong>
          <p style={{ margin: "6px 0 0 0", fontSize: "13px", color: isDark ? "#94a3b8" : "#64748b" }}>
            Both the Toggle button and the Container use <code>useContext(ThemeContext)</code> to stay in sync.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Main ThemeContainer component wrapped in ThemeProvider
 */
export default function ThemeContainer() {
  return (
    <ThemeProvider>
      <ThemeContent />
    </ThemeProvider>
  );
}
export { ThemeContainer, ThemeContent };
