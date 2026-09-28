import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

/**
 * PostCard Component (Deeply Nested Component - Level 3)
 * Aa component 3 levels deep nest thashe ane
 * intermediate components mathi koi props lidha vagar
 * sidhe-sidho ThemeContext mathi theme consume kare chhe.
 */
function PostCard({
  author = "mamta_chavda",
  location = "Ahmedabad, India",
  content = "Exploring React Context API! No prop drilling needed across 3+ nested components.",
  initialLikes = 342,
}) {
  // ThemeContext mathi theme consume kare chhe
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  // Background and text style updates dynamically based on current Theme
  const cardStyle = {
    backgroundColor: isDark ? "#27272a" : "#ffffff",
    color: isDark ? "#f4f4f5" : "#1e293b",
    border: isDark ? "1px solid #3f3f46" : "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "20px",
    maxWidth: "520px",
    width: "100%",
    margin: "15px auto",
    boxShadow: isDark
      ? "0 8px 30px rgba(0, 0, 0, 0.6)"
      : "0 8px 30px rgba(0, 0, 0, 0.06)",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
    paddingBottom: "12px",
    borderBottom: isDark ? "1px solid #3f3f46" : "1px solid #f1f5f9",
  };

  const badgeStyle = {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: "600",
    padding: "4px 10px",
    borderRadius: "20px",
    backgroundColor: isDark ? "#10b98133" : "#d1fae5",
    color: isDark ? "#34d399" : "#065f46",
    textTransform: "uppercase",
  };

  const imageBoxStyle = {
    width: "100%",
    height: "200px",
    borderRadius: "12px",
    background: isDark
      ? "linear-gradient(135deg, #1e3a5f, #0f172a)"
      : "linear-gradient(135deg, #e0e7ff, #c7d2fe)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: isDark ? "#93c5fd" : "#3730a3",
    fontWeight: "600",
    fontSize: "16px",
    gap: "8px",
    marginBottom: "16px",
    transition: "all 0.3s ease",
  };

  const likeBtnStyle = {
    background: isDark ? "#3f3f46" : "#f1f5f9",
    border: "none",
    padding: "8px 16px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    color: isDark ? "#ffffff" : "#1e293b",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    transition: "transform 0.1s ease",
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div style={cardStyle}>
      {/* Card Header */}
      <div style={headerStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            {author.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style={{ fontWeight: "700", fontSize: "15px" }}>{author}</div>
            <div style={{ fontSize: "12px", color: isDark ? "#a1a1aa" : "#64748b" }}>
              {location}
            </div>
          </div>
        </div>

        {/* Level Indicator Badge */}
        <span style={badgeStyle}>Level 3 Component</span>
      </div>

      {/* Post Media Placeholder */}
      <div style={imageBoxStyle}>
        <span style={{ fontSize: "32px" }}>{isDark ? "🌌" : "🌅"}</span>
        <span>{isDark ? "Dark Theme Active" : "Light Theme Active"}</span>
        <span style={{ fontSize: "12px", opacity: 0.8 }}>
          Background Color: <code>{isDark ? "#27272a" : "#ffffff"}</code>
        </span>
      </div>

      {/* Post Content */}
      <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "0 0 16px 0" }}>
        {content}
      </p>

      {/* Card Footer / Actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "12px",
          borderTop: isDark ? "1px solid #3f3f46" : "1px solid #f1f5f9",
        }}
      >
        <button onClick={handleLike} style={likeBtnStyle}>
          <span>{isLiked ? "❤️" : "🤍"}</span>
          <span>{likes} Likes</span>
        </button>

        <div style={{ fontSize: "12px", color: isDark ? "#a1a1aa" : "#64748b" }}>
          Directly consuming <strong>ThemeContext</strong>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
