import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

// Inner component je ThemeContext mathi theme consume kare chhe
function InstaThemeContent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  const [likes, setLikes] = useState(120);
  const [isLiked, setIsLiked] = useState(false);

  // Theme according style object (Light & Dark mode)
  const isDark = theme === "dark";

  const containerStyle = {
    backgroundColor: isDark ? "#121212" : "#f4f4f9",
    color: isDark ? "#ffffff" : "#222222",
    minHeight: "100vh",
    padding: "30px 20px",
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    transition: "all 0.3s ease",
  };

  const cardStyle = {
    maxWidth: "450px",
    margin: "20px auto",
    backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
    color: isDark ? "#ffffff" : "#333333",
    borderRadius: "14px",
    boxShadow: isDark
      ? "0 4px 20px rgba(0,0,0,0.6)"
      : "0 4px 20px rgba(0,0,0,0.08)",
    border: isDark ? "1px solid #333333" : "1px solid #e5e5e5",
    overflow: "hidden",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    padding: "10px 18px",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: isDark ? "#f39c12" : "#2c3e50",
    color: "#ffffff",
    transition: "background 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{ marginBottom: "8px" }}>📸 InstaThemeDemo (Session 7 - Question 1)</h2>
        <p style={{ color: isDark ? "#aaaaaa" : "#666666", fontSize: "14px" }}>
          React <strong>ThemeContext</strong> sathe 'dark' ane 'light' theme state management
        </p>

        {/* Theme Toggle Buttons */}
        <div style={{ marginTop: "15px", display: "flex", gap: "10px", justifyContent: "center" }}>
          <button style={buttonStyle} onClick={toggleTheme}>
            {isDark ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
          </button>
          <button
            onClick={() => setTheme("light")}
            style={{
              padding: "8px 14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              background: theme === "light" ? "#4caf50" : "#eee",
              color: theme === "light" ? "#fff" : "#333",
              cursor: "pointer",
            }}
          >
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            style={{
              padding: "8px 14px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: theme === "dark" ? "#4caf50" : "#333",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Dark
          </button>
        </div>

        <div style={{ marginTop: "10px", fontSize: "14px" }}>
          Current Active Theme: <span style={{ fontWeight: "bold", color: "#e91e63" }}>{theme}</span>
        </div>
      </div>

      {/* Instagram Post Card Demo */}
      <div style={cardStyle}>
        {/* Post Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            borderBottom: isDark ? "1px solid #2d2d2d" : "1px solid #f0f0f0",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(45deg, #f09433, #dc2743, #bc1888)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              marginRight: "12px",
            }}
          >
            M
          </div>
          <div>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>mamta_chavda</div>
            <div style={{ fontSize: "12px", color: isDark ? "#888" : "#888" }}>Ahmedabad, India</div>
          </div>
        </div>

        {/* Post Image Banner */}
        <div
          style={{
            height: "220px",
            background: isDark
              ? "linear-gradient(135deg, #2c3e50, #1a252f)"
              : "linear-gradient(135deg, #667eea, #764ba2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            padding: "20px",
          }}
        >
          🌄 {isDark ? "Nightscape Mode Active" : "Daylight Mode Active"}
        </div>

        {/* Post Actions & Caption */}
        <div style={{ padding: "14px 16px" }}>
          <div style={{ display: "flex", gap: "15px", alignItems: "center", marginBottom: "10px" }}>
            <button
              onClick={handleLike}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              {isLiked ? "❤️" : "🤍"}
            </button>
            <span style={{ fontSize: "14px", fontWeight: "600" }}>{likes} likes</span>
          </div>

          <p style={{ fontSize: "14px", margin: "6px 0", lineHeight: "1.4" }}>
            <strong>mamta_chavda</strong> Session 7 Question 1 successfully completed! Aa component ThemeContext mathi theme consume kare chhe.
          </p>
          <div style={{ fontSize: "12px", color: isDark ? "#888" : "#999", marginTop: "8px" }}>
            ThemeContext State: <code>{theme}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component: App ma ThemeProvider wrap kare chhe
function InstaThemeDemo() {
  return (
    <ThemeProvider>
      <InstaThemeContent />
    </ThemeProvider>
  );
}

export default InstaThemeDemo;
