import React from "react";
import { UserContext, UserProvider } from "./UserContext";
import Navbar from "./Navbar";
import ThemeContainer from "./ThemeContainer";

/**
 * Session 10 Demo Component
 * Showcases:
 * - Question 1: UserContext with default value
 * - Question 2: Navbar using useContext
 * - Question 3: ThemeContext toggle button updating main div background color
 */
function UserContextDemo() {
  return (
    <div style={demoStyles.container}>
      <div style={demoStyles.headerBadge}>
        <span>SESSION 10 ASSIGNMENT</span>
      </div>
      <h2 style={demoStyles.title}>React Context API & Hooks</h2>
      <p style={demoStyles.desc}>
        Demonstrating UserContext (Q1 & Q2) and ThemeContext Switcher (Q3).
      </p>

      {/* ========================================================= */}
      {/* SECTION 1: QUESTION 1 & QUESTION 2 (UserContext & Navbar) */}
      {/* ========================================================= */}
      <div style={demoStyles.section}>
        <h3 style={demoStyles.sectionTitle}>
          📌 Questions 1 & 2: UserContext & Navbar Component
        </h3>

        {/* Case 1: Consuming UserContext Default Value directly (Without Provider) */}
        <div style={demoStyles.card}>
          <h4 style={demoStyles.cardTitle}>
            1. Without Provider (Shows Default Value: "Guest", loggedIn: false)
          </h4>
          <Navbar />
        </div>

        {/* Case 2: Wrapped in UserProvider (Allows Login/Logout toggle) */}
        <div style={demoStyles.card}>
          <h4 style={demoStyles.cardTitle}>
            2. Inside UserProvider (Interactive State with Login/Logout Toggle)
          </h4>
          <UserProvider>
            <Navbar />
          </UserProvider>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 2: QUESTION 3 (ThemeContext & Dynamic Background) */}
      {/* ========================================================= */}
      <div style={demoStyles.section}>
        <h3 style={demoStyles.sectionTitle}>
          📌 Question 3: Theme Toggle & Dynamic Background Color
        </h3>
        <ThemeContainer />
      </div>
    </div>
  );
}

const demoStyles = {
  container: {
    maxWidth: "960px",
    margin: "40px auto",
    padding: "24px",
    fontFamily: "'Segoe UI', Roboto, sans-serif",
  },
  headerBadge: {
    display: "inline-block",
    padding: "4px 12px",
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#0f172a",
    margin: "0 0 6px 0",
  },
  desc: {
    color: "#64748b",
    marginBottom: "32px",
    fontSize: "15px",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "19px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "16px",
    paddingBottom: "8px",
    borderBottom: "2px solid #e2e8f0",
  },
  card: {
    backgroundColor: "#f8fafc",
    padding: "20px",
    borderRadius: "14px",
    border: "1px solid #e2e8f0",
    marginBottom: "20px",
  },
  cardTitle: {
    margin: "0 0 12px 0",
    color: "#334155",
    fontSize: "15px",
    fontWeight: "600",
  },
};

export default UserContextDemo;
