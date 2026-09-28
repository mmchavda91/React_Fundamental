import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Navbar from "./Navbar";
import PostCard from "./PostCard";
import ToggleThemeButton from "./ToggleThemeButton";

/**
 * ==============================================================================
 * React Advanced - Session 7 (Question 4)
 * ==============================================================================
 * Task: Refactor your components so that NO theme prop is passed manually
 * through intermediate components (no prop drilling) — only use ThemeContext
 * to share the theme value.
 * ==============================================================================
 * 
 * ❌ BEFORE REFACTOR (Prop Drilling Problem):
 * ------------------------------------------------------------------------------
 * function App() {
 *   const [theme, setTheme] = useState("light");
 *   return (
 *     <div>
 *       <Navbar theme={theme} setTheme={setTheme} />
 *       <FeedContainer theme={theme} />  <--- Prop Drilling!
 *     </div>
 *   );
 * }
 * function FeedContainer({ theme }) {
 *   return <PostSection theme={theme} />;  <--- Doesn't use theme, but forced to pass it!
 * }
 * function PostSection({ theme }) {
 *   return <PostCard theme={theme} />;     <--- Doesn't use theme, but forced to pass it!
 * }
 * function PostCard({ theme }) {
 *   return <div style={{ background: theme === "dark" ? "#222" : "#fff" }}>...</div>;
 * }
 * 
 * ------------------------------------------------------------------------------
 * ✅ AFTER REFACTOR (Clean React Context - Zero Prop Drilling):
 * ------------------------------------------------------------------------------
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <Navbar />        <--- No theme prop! Consumes via useTheme()
 *       <FeedContainer /> <--- No theme prop! Completely decoupled
 *     </ThemeProvider>
 *   );
 * }
 * function FeedContainer() {
 *   return <PostSection />;  <--- NO theme prop! Clean intermediate component
 * }
 * function PostSection() {
 *   return <PostCard />;     <--- NO theme prop! Clean intermediate component
 * }
 * function PostCard() {
 *   const { theme } = useTheme(); <--- Consumes directly from ThemeContext!
 *   return <div style={{ background: theme === "dark" ? "#222" : "#fff" }}>...</div>;
 * }
 * ==============================================================================
 */

/* ==============================================================================
   LEVEL 2: PostSection (Intermediate Component)
   Zero props drilling: Neither receives nor forwards any `theme` prop.
   ============================================================================== */
export function PostSection() {
  return (
    <div
      style={{
        border: "2px dashed #94a3b8",
        borderRadius: "14px",
        padding: "18px",
        marginTop: "16px",
        backgroundColor: "rgba(148, 163, 184, 0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: "700",
            color: "#64748b",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          📦 Level 2: PostSection
        </span>
        <span
          style={{
            fontSize: "11px",
            color: "#10b981",
            fontWeight: "600",
            backgroundColor: "#d1fae5",
            padding: "2px 8px",
            borderRadius: "10px",
          }}
        >
          ✓ No theme prop received or passed
        </span>
      </div>

      {/* LEVEL 3: Deeply nested PostCard - NO props drilling! */}
      <PostCard
        author="mamta_chavda"
        location="Ahmedabad, Gujarat"
        content="✨ Session 7 Question 4: Refactored with React Context API! Neither FeedContainer nor PostSection touches the theme prop. PostCard gets the theme directly from ThemeContext."
        initialLikes={789}
      />
    </div>
  );
}

/* ==============================================================================
   LEVEL 1: FeedContainer (Intermediate Component)
   Zero props drilling: Clean container layout.
   ============================================================================== */
export function FeedContainer() {
  return (
    <div
      style={{
        border: "2px dashed #64748b",
        borderRadius: "18px",
        padding: "22px",
        maxWidth: "680px",
        margin: "0 auto",
        backgroundColor: "rgba(100, 116, 139, 0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: "700",
            color: "#475569",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          🗂️ Level 1: FeedContainer
        </span>
        <span
          style={{
            fontSize: "11px",
            color: "#10b981",
            fontWeight: "600",
            backgroundColor: "#d1fae5",
            padding: "2px 8px",
            borderRadius: "10px",
          }}
        >
          ✓ No theme prop received or passed
        </span>
      </div>

      {/* Renders Level 2 without any theme prop */}
      <PostSection />
    </div>
  );
}

/* ==============================================================================
   Refactor Comparison Visualizer Card
   ============================================================================== */
function PropDrillingComparison({ isDark }) {
  const boxStyle = {
    padding: "16px",
    borderRadius: "12px",
    fontSize: "13px",
    lineHeight: "1.6",
    flex: 1,
    minWidth: "280px",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        margin: "24px 0",
        textAlign: "left",
      }}
    >
      {/* Before Card */}
      <div
        style={{
          ...boxStyle,
          backgroundColor: isDark ? "#450a0a33" : "#fef2f2",
          border: isDark ? "1px solid #7f1d1d" : "1px solid #fecaca",
          color: isDark ? "#fca5a5" : "#991b1b",
        }}
      >
        <div style={{ fontWeight: "700", marginBottom: "8px", fontSize: "14px" }}>
          ❌ Before (Prop Drilling):
        </div>
        <code style={{ display: "block", fontSize: "12px", whiteSpace: "pre-wrap" }}>
{`App (has theme)
  └── FeedContainer(theme)  ⚠️ passing prop
        └── PostSection(theme)  ⚠️ passing prop
              └── PostCard(theme)  🎯 uses prop`}
        </code>
        <p style={{ marginTop: "8px", fontSize: "12px" }}>
          Intermediate components ne theme ની જરૂર નહોતી છતાં prop પાસ કરવો પડતો હતો.
        </p>
      </div>

      {/* After Card */}
      <div
        style={{
          ...boxStyle,
          backgroundColor: isDark ? "#064e3b33" : "#f0fdf4",
          border: isDark ? "1px solid #065f46" : "1px solid #bbf7d0",
          color: isDark ? "#86efac" : "#166534",
        }}
      >
        <div style={{ fontWeight: "700", marginBottom: "8px", fontSize: "14px" }}>
          ✅ After (ThemeContext Refactor - No Prop Drilling):
        </div>
        <code style={{ display: "block", fontSize: "12px", whiteSpace: "pre-wrap" }}>
{`<ThemeProvider>
  ├── Navbar (useTheme()) 🎯
  └── FeedContainer (clean, no props)
        └── PostSection (clean, no props)
              └── PostCard (useTheme()) 🎯`}
        </code>
        <p style={{ marginTop: "8px", fontSize: "12px" }}>
          કોઈપણ intermediate component માં theme prop પાસ કર્યા વગર સીધો <code>ThemeContext</code> માંથી access થાય છે!
        </p>
      </div>
    </div>
  );
}

/* ==============================================================================
   Page Content
   ============================================================================== */
function PropDrillingRefactorContent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      style={{
        backgroundColor: isDark ? "#09090b" : "#f8fafc",
        color: isDark ? "#f4f4f5" : "#0f172a",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      {/* Navbar: consumes ThemeContext directly, NO props! */}
      <Navbar />

      <div style={{ maxWidth: "850px", margin: "0 auto", padding: "30px 20px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "800", marginBottom: "8px" }}>
            Session 7 - Question 4: No Prop Drilling Refactor
          </h2>
          <p style={{ color: isDark ? "#a1a1aa" : "#64748b", fontSize: "15px" }}>
            Components refactored to eliminate prop drilling — only <code>ThemeContext</code> shares the theme value!
          </p>

          <div style={{ marginTop: "16px" }}>
            <ToggleThemeButton size="medium" />
          </div>
        </div>

        {/* Visual Before vs After */}
        <PropDrillingComparison isDark={isDark} />

        {/* Level 1 -> Level 2 -> Level 3 (PostCard) */}
        <FeedContainer />
      </div>
    </div>
  );
}

/* ==============================================================================
   MAIN EXPORT (Wrapped in ThemeProvider)
   ============================================================================== */
export default function PropDrillingRefactor() {
  return (
    <ThemeProvider>
      <PropDrillingRefactorContent />
    </ThemeProvider>
  );
}
