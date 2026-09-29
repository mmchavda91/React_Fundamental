import React, { useContext } from "react";
import { UserContext } from "./UserContext";

/**
 * Navbar Component - Session 10 (Question 2)
 *
 * Uses useContext hook to consume the UserContext and display
 * the current username and logged-in status.
 */
function Navbar() {
  // Consume user details and actions from UserContext using useContext
  const userContext = useContext(UserContext);

  // Destructure values (with safe fallbacks to default values)
  const username = userContext?.username || "Guest";
  const loggedIn = userContext?.loggedIn ?? false;
  const toggleLogin = userContext?.toggleLogin;

  return (
    <nav style={styles.nav}>
      {/* Brand / Logo */}
      <div style={styles.brand}>
        <span style={styles.logoIcon}>⚡</span>
        <span style={styles.brandText}>ContextApp</span>
      </div>

      {/* Navigation Links */}
      <div style={styles.navLinks}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#services" style={styles.link}>Services</a>
      </div>

      {/* User Info Section using UserContext */}
      <div style={styles.userSection}>
        <div style={styles.userBadge}>
          <span style={styles.avatar}>
            {loggedIn ? "👤" : "🔒"}
          </span>
          <div style={styles.userInfo}>
            <span style={styles.greeting}>
              Hello, <strong style={styles.username}>{username}</strong>
            </span>
            <span
              style={{
                ...styles.statusBadge,
                backgroundColor: loggedIn ? "#10b981" : "#6b7280",
              }}
            >
              {loggedIn ? "● Logged In" : "○ Logged Out"}
            </span>
          </div>
        </div>

        {/* Optional Action Button if toggleLogin function is provided by UserProvider */}
        {toggleLogin && (
          <button
            onClick={toggleLogin}
            style={{
              ...styles.btn,
              backgroundColor: loggedIn ? "#ef4444" : "#3b82f6",
            }}
          >
            {loggedIn ? "Logout" : "Login"}
          </button>
        )}
      </div>
    </nav>
  );
}

// Clean inline styles for modern presentation
const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "16px",
    backgroundColor: "#1e293b",
    color: "#ffffff",
    padding: "14px 28px",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    margin: "16px 0",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "700",
    fontSize: "20px",
    letterSpacing: "0.5px",
    color: "#60a5fa",
  },
  logoIcon: {
    fontSize: "22px",
  },
  brandText: {
    color: "#ffffff",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    transition: "color 0.2s ease",
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  userBadge: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#334155",
    padding: "6px 14px",
    borderRadius: "24px",
  },
  avatar: {
    fontSize: "18px",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.2",
  },
  greeting: {
    fontSize: "13px",
    color: "#e2e8f0",
  },
  username: {
    color: "#38bdf8",
    fontWeight: "600",
  },
  statusBadge: {
    fontSize: "10px",
    fontWeight: "700",
    padding: "2px 6px",
    borderRadius: "8px",
    color: "#ffffff",
    marginTop: "2px",
    display: "inline-block",
    width: "fit-content",
    letterSpacing: "0.4px",
  },
  btn: {
    color: "#ffffff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "13px",
    cursor: "pointer",
    transition: "transform 0.15s ease, opacity 0.2s ease",
  },
};

export { Navbar };
export default Navbar;
