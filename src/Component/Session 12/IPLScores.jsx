import React, { useState, useEffect } from "react";

// IPLScores Component - Session 12 (Q3)
// Fetches dummy data from https://jsonplaceholder.typicode.com/users
// Maps user fields to mock IPL cricket scores
// If response.status !== 200 → throws error → shows 'Error loading scores'

// ── Mock IPL team names (mapped by user id 1-10) ────────────────
const IPL_TEAMS = {
  1: "Mumbai Indians",
  2: "Chennai Super Kings",
  3: "Royal Challengers Bangalore",
  4: "Kolkata Knight Riders",
  5: "Sunrisers Hyderabad",
  6: "Delhi Capitals",
  7: "Punjab Kings",
  8: "Rajasthan Royals",
  9: "Gujarat Titans",
  10: "Lucknow Super Giants",
};

const IPLScores = () => {
  const [scores, setScores] = useState([]);      // stores match score data
  const [error, setError] = useState(false);     // tracks error state
  const [loading, setLoading] = useState(true);  // tracks loading state

  // ── Async fetch function with try/catch ──────────────────────
  const fetchScores = async () => {
    setLoading(true);
    setError(false);
    setScores([]);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      // Check response.status explicitly — throw if NOT 200
      if (response.status !== 200) {
        throw new Error(`Unexpected status: ${response.status}`);
      }

      const data = await response.json();

      // Map API user fields → dummy IPL cricket score fields
      const mapped = data.map((user) => ({
        id: user.id,
        team: IPL_TEAMS[user.id] || user.name,
        // Use phone digits to generate a plausible score e.g. "182/4 (20 ov)"
        runs: (user.id * 17 + 82) % 250 + 100,
        wickets: user.id % 10,
        overs: user.id % 2 === 0 ? 20 : parseFloat((user.id * 1.7).toFixed(1)),
        // Even id → won, odd → lost (dummy result)
        result: user.id % 2 === 0 ? "✅ Won" : "❌ Lost",
      }));

      setScores(mapped);
    } catch (err) {
      // Network error or non-200 status → show error message
      console.error("Failed to load scores:", err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Run once on mount
  useEffect(() => {
    fetchScores();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Render ───────────────────────────────────────────────────
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>🏏 IPL Live Scores</h1>
          <p style={styles.subtitle}>Dummy scores via JSONPlaceholder API</p>
        </div>

        {/* Loading */}
        {loading && (
          <div style={styles.center}>
            <p style={styles.loadingText}>⏳ Loading scores...</p>
          </div>
        )}

        {/* Error — shown when response.status !== 200 */}
        {error && !loading && (
          <div style={styles.center}>
            <div style={styles.errorBox}>
              <p style={styles.errorText}>🚫 Error loading scores</p>
              <p style={styles.errorSub}>
                The API did not return a valid response.
              </p>
              <button style={styles.retryBtn} onClick={fetchScores}>
                🔄 Retry
              </button>
            </div>
          </div>
        )}

        {/* Score Cards */}
        {!loading && !error && (
          <div style={styles.grid}>
            {scores.map((match) => (
              <div key={match.id} style={styles.card}>
                {/* Team Name */}
                <h3 style={styles.teamName}>{match.team}</h3>

                {/* Score */}
                <p style={styles.score}>
                  {match.runs}/{match.wickets}
                  <span style={styles.overs}> ({match.overs} ov)</span>
                </p>

                {/* Result Badge */}
                <span
                  style={{
                    ...styles.badge,
                    backgroundColor:
                      match.result.includes("Won") ? "#a6e3a1" : "#f38ba8",
                    color: "#1e1e2e",
                  }}
                >
                  {match.result}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ── Inline Styles ────────────────────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#11111b",
    padding: "32px 16px",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  title: {
    color: "#cba6f7",
    fontSize: "32px",
    margin: 0,
    letterSpacing: "1px",
  },
  subtitle: {
    color: "#6c7086",
    fontSize: "13px",
    marginTop: "6px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
  },
  loadingText: {
    color: "#89b4fa",
    fontSize: "18px",
  },
  errorBox: {
    textAlign: "center",
    padding: "32px",
    border: "1px solid #f38ba8",
    borderRadius: "12px",
    backgroundColor: "#1e1e2e",
  },
  errorText: {
    color: "#f38ba8",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0 8px 0",
  },
  errorSub: {
    color: "#6c7086",
    fontSize: "13px",
    marginBottom: "16px",
  },
  retryBtn: {
    padding: "10px 24px",
    backgroundColor: "#cba6f7",
    color: "#1e1e2e",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#1e1e2e",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
    border: "1px solid #313244",
  },
  teamName: {
    color: "#cdd6f4",
    fontSize: "15px",
    fontWeight: "bold",
    margin: "0 0 10px 0",
  },
  score: {
    color: "#f9e2af",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0 0 12px 0",
  },
  overs: {
    fontSize: "14px",
    color: "#6c7086",
    fontWeight: "normal",
  },
  badge: {
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  },
};

export default IPLScores;
