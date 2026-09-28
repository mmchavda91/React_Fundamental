import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Navbar from "./Navbar";
import PostCard from "./PostCard";
import ToggleThemeButton from "./ToggleThemeButton";

/* ==========================================================================
   LEVEL 2: PostSection (Intermediate Component)
   Notice: Aa component ne koi theme prop pass karvama aavto nathi!
   Prop drilling thatu nathi.
   ========================================================================== */
function Level2PostSection() {
  return (
    <div
      style={{
        border: "2px dashed #94a3b8",
        borderRadius: "16px",
        padding: "20px",
        marginTop: "16px",
        background: "rgba(148, 163, 184, 0.05)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          fontSize: "12px",
          fontWeight: "bold",
          color: "#64748b",
          marginBottom: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        📦 Level 2: PostSection (No theme prop passed here)
      </div>

      {/* LEVEL 3: Deeply Nested PostCard */}
      <PostCard
        author="mamta_chavda"
        location="Ahmedabad, Gujarat"
        content="🚀 React Advanced Session 7 - Question 2 & 3: Successfully demonstrating ThemeContext with Navbar, ToggleThemeButton, and a deeply nested PostCard (Level 3) without any prop drilling!"
        initialLikes={512}
      />
    </div>
  );
}

/* ==========================================================================
   LEVEL 1: FeedContainer (Intermediate Component)
   Notice: Aa pan koi theme prop pass karto nathi.
   ========================================================================== */
function Level1FeedContainer() {
  return (
    <div
      style={{
        border: "2px dashed #64748b",
        borderRadius: "20px",
        padding: "24px",
        maxWidth: "700px",
        margin: "0 auto",
        background: "rgba(100, 116, 139, 0.03)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          fontSize: "13px",
          fontWeight: "bold",
          color: "#475569",
          marginBottom: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        🗂️ Level 1: FeedContainer (No theme prop passed here)
      </div>

      {/* Renders Level 2 */}
      <Level2PostSection />
    </div>
  );
}

/* ==========================================================================
   MAIN CONTENT WRAPPER
   Theme pramane full page background change kare chhe
   ========================================================================== */
function ThemeNestedContent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const pageStyle = {
    backgroundColor: isDark ? "#09090b" : "#f8fafc",
    color: isDark ? "#f4f4f5" : "#0f172a",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      {/* 1. Navbar Component (Consumes ThemeContext) */}
      <Navbar />

      {/* Main Page Container */}
      <div style={{ maxWidth: "850px", margin: "0 auto", padding: "30px 20px" }}>
        {/* Title & Explanation */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "800", marginBottom: "10px" }}>
            Session 7 - Question 2 & 3: ThemeContext & ToggleThemeButton Demo
          </h2>
          <p style={{ color: isDark ? "#a1a1aa" : "#64748b", fontSize: "15px", maxWidth: "600px", margin: "0 auto" }}>
            Navbar ane deeply nested PostCard (at least 3 levels deep) banne <code>ThemeContext</code> mathi theme consume kare chhe. <code>ToggleThemeButton</code> par click karta j badha components instantly update thaay chhe.
          </p>

          {/* Component Nesting Hierarchy Visualizer */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "20px",
              padding: "10px 18px",
              borderRadius: "30px",
              backgroundColor: isDark ? "#18181b" : "#ffffff",
              border: isDark ? "1px solid #27272a" : "1px solid #e2e8f0",
              fontSize: "13px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <span style={{ fontWeight: "700", color: "#3b82f6" }}>Hierarchy:</span>
            <span>App / Provider</span>
            <span>➔</span>
            <span style={{ color: "#8b5cf6", fontWeight: "600" }}>Level 1: FeedContainer</span>
            <span>➔</span>
            <span style={{ color: "#ec4899", fontWeight: "600" }}>Level 2: PostSection</span>
            <span>➔</span>
            <span
              style={{
                backgroundColor: isDark ? "#10b98133" : "#d1fae5",
                color: isDark ? "#34d399" : "#065f46",
                padding: "2px 8px",
                borderRadius: "12px",
                fontWeight: "700",
              }}
            >
              Level 3: PostCard (Direct Consumer)
            </span>
          </div>

          {/* Question 3: ToggleThemeButton Component Demo */}
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "13px", color: isDark ? "#a1a1aa" : "#64748b", fontWeight: "600" }}>
              Question 3: ToggleThemeButton Component
            </span>
            <ToggleThemeButton size="large" />
          </div>
        </div>

        {/* 2. Deeply Nested Component Tree (Level 1 ➔ Level 2 ➔ Level 3: PostCard) */}
        <Level1FeedContainer />
      </div>
    </div>
  );
}

/* ==========================================================================
   EXPORTED COMPONENT (Wrapped inside ThemeProvider)
   ========================================================================== */
function ThemeNestedDemo() {
  return (
    <ThemeProvider>
      <ThemeNestedContent />
    </ThemeProvider>
  );
}

export default ThemeNestedDemo;
export { Level1FeedContainer, Level2PostSection };
