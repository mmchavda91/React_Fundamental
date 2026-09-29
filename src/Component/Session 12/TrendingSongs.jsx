import React, { useState, useEffect } from "react";

// TrendingSongs Component - Session 12 (Q2)
// Uses async/await + try/catch
// Includes a Reload button to retry the API call

const TrendingSongs = () => {
  const [songs, setSongs] = useState([]);       // stores fetched titles
  const [error, setError] = useState(false);    // tracks error state
  const [loading, setLoading] = useState(true); // tracks loading state

  // ── Async function with try/catch ─────────────────────────
  // Extracted outside useEffect so the Reload button can also call it
  const fetchSongs = async () => {
    setLoading(true);   // show loading spinner on every (re)try
    setError(false);    // clear any previous error
    setSongs([]);       // clear old data

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      // If HTTP status is not 2xx, throw to go to catch block
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Slice first 3 posts and pick only the title field
      const firstThree = data.slice(0, 3).map((post) => post.title);
      setSongs(firstThree);
    } catch (err) {
      // Any network / HTTP error lands here
      console.error("Fetch failed:", err.message);
      setError(true); // still failing → keep showing error message
    } finally {
      setLoading(false); // always hide spinner when done
    }
  };

  // Run on first mount
  useEffect(() => {
    fetchSongs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Render ────────────────────────────────────────────────
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎵 Trending Songs</h2>

      {/* Loading State */}
      {loading && <p style={styles.loading}>⏳ Loading...</p>}

      {/* Error State + Reload button */}
      {error && !loading && (
        <div style={styles.errorBox}>
          <p style={styles.errorText}>❌ Error loading data</p>
          <button style={styles.reloadBtn} onClick={fetchSongs}>
            🔄 Reload
          </button>
        </div>
      )}

      {/* Success State — show first 3 titles */}
      {!loading && !error && (
        <>
          <ul style={styles.list}>
            {songs.map((title, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.number}>{index + 1}.</span> {title}
              </li>
            ))}
          </ul>

          {/* Reload button even on success */}
          <button style={styles.reloadBtn} onClick={fetchSongs}>
            🔄 Reload
          </button>
        </>
      )}
    </div>
  );
};

// ── Inline Styles ─────────────────────────────────────────
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "24px",
    borderRadius: "12px",
    backgroundColor: "#1e1e2e",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    fontFamily: "Arial, sans-serif",
    color: "#cdd6f4",
  },
  heading: {
    textAlign: "center",
    color: "#cba6f7",
    marginBottom: "20px",
    fontSize: "24px",
  },
  loading: {
    textAlign: "center",
    color: "#89b4fa",
    fontSize: "16px",
  },
  errorBox: {
    textAlign: "center",
  },
  errorText: {
    color: "#f38ba8",
    fontWeight: "bold",
    fontSize: "16px",
    border: "1px solid #f38ba8",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "12px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 16px 0",
  },
  listItem: {
    padding: "12px 16px",
    marginBottom: "10px",
    backgroundColor: "#313244",
    borderRadius: "8px",
    fontSize: "14px",
    lineHeight: "1.6",
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
  },
  number: {
    color: "#a6e3a1",
    fontWeight: "bold",
    minWidth: "20px",
  },
  reloadBtn: {
    display: "block",
    margin: "0 auto",
    padding: "10px 28px",
    backgroundColor: "#cba6f7",
    color: "#1e1e2e",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "opacity 0.2s",
  },
};

export default TrendingSongs;

