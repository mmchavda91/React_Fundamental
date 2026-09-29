import React, { useState, useEffect } from "react";
import axios from "axios";

/**
 * ==============================================================================
 * React - Session 11 (Questions 1 & 4)
 * ==============================================================================
 * Task 1:
 * Fetch popular movies from TMDB / mock API using Axios and display the first 5.
 *
 * Task 4:
 * Update movie list component to handle loading and error states:
 * show 'Loading...' while the Axios request is in progress and display
 * an error message if the API call fails.
 * Hint: Use useState to track loading and error states.
 * ==============================================================================
 */
function TrendingMovies() {
  // Question 4: useState hooks to track data, loading, and error states
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiSource, setApiSource] = useState("");
  const [customKey, setCustomKey] = useState("");

  const fallbackTitles = [
    { id: 1, title: "Oppenheimer (2023)", rating: "8.9", genre: "Biography / Drama" },
    { id: 2, title: "Interstellar (2014)", rating: "8.7", genre: "Sci-Fi / Adventure" },
    { id: 3, title: "Inception (2010)", rating: "8.8", genre: "Action / Sci-Fi" },
    { id: 4, title: "The Dark Knight (2008)", rating: "9.0", genre: "Action / Crime" },
    { id: 5, title: "Dune: Part Two (2024)", rating: "8.6", genre: "Action / Adventure" },
  ];

  // Core Axios fetch function
  const fetchMovies = async (shouldSimulateError = false, key = customKey) => {
    // 1. Set loading = true and clear previous errors
    setLoading(true);
    setError(null);

    // Artificial delay so user can clearly see 'Loading...' state
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Simulated error scenario for testing Question 4
    if (shouldSimulateError) {
      try {
        await axios.get("https://api.themoviedb.org/3/movie/invalid_endpoint_testing_404");
      } catch (err) {
        setLoading(false);
        setError(`Failed to fetch movies: ${err.message || "Network Error"} (Status: 404 Not Found)`);
        setMovies([]);
        return;
      }
    }

    // Attempt TMDB API if key provided
    if (key.trim()) {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: { api_key: key.trim() },
          }
        );

        // First 5 movie titles
        const top5 = response.data.results.slice(0, 5).map((m) => ({
          id: m.id,
          title: m.title,
          rating: m.vote_average ? m.vote_average.toFixed(1) : "N/A",
          genre: `Release: ${m.release_date || "N/A"}`,
        }));

        setMovies(top5);
        setApiSource("TMDB Official API");
        setLoading(false);
        return;
      } catch (err) {
        setError(`TMDB API Error: ${err.response?.data?.status_message || err.message}. Fallback to mock API.`);
      }
    }

    // Default mock API via Axios (JSONPlaceholder)
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      const top5 = response.data.slice(0, 5).map((item, idx) => ({
        id: item.id,
        title: fallbackTitles[idx]?.title || item.title,
        rating: fallbackTitles[idx]?.rating || "8.5",
        genre: fallbackTitles[idx]?.genre || "Drama / Thriller",
      }));

      setMovies(top5);
      setApiSource("Mock API (jsonplaceholder.typicode.com)");
    } catch (err) {
      // Set error state if API call fails
      setError(`Error fetching movies: ${err.message || "Unknown error occurred"}`);
      setMovies([]);
    } finally {
      // Ensure loading is set to false once Axios request completes
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div style={styles.card}>
      <div style={styles.headerBadge}>SESSION 11 - QUESTIONS 1 & 4</div>
      <h3 style={styles.title}>🎬 Trending Movies (Loading & Error Handled)</h3>
      <p style={styles.subtitle}>
        Axios request with full <code>useState</code> tracking for <strong>Loading...</strong> and <strong>Error</strong> states.
      </p>

      {/* Control / Testing Toolbar for Question 4 verification */}
      <div style={styles.toolbar}>
        <button
          onClick={() => fetchMovies(false)}
          disabled={loading}
          style={styles.btnSuccess}
          title="Reload data via Axios to observe 'Loading...' state"
        >
          🔄 Re-fetch Movies (Observe "Loading...")
        </button>

        <button
          onClick={() => fetchMovies(true)}
          disabled={loading}
          style={styles.btnDanger}
          title="Trigger a failed Axios call to verify error handling"
        >
          💥 Simulate API Failure (Test Error State)
        </button>

        <span style={styles.sourceTag}>
          Source: <strong>{apiSource || "Connecting..."}</strong>
        </span>
      </div>

      {/* QUESTION 4: ERROR STATE DISPLAY */}
      {error && (
        <div style={styles.errorBox}>
          <div style={{ fontSize: "20px" }}>❌</div>
          <div>
            <strong style={{ display: "block", marginBottom: "4px" }}>API Call Failed!</strong>
            <span>{error}</span>
          </div>
          <button
            onClick={() => fetchMovies(false)}
            style={styles.retryBtn}
          >
            Retry Fetch
          </button>
        </div>
      )}

      {/* QUESTION 4: LOADING STATE DISPLAY */}
      {loading ? (
        <div style={styles.loadingBox}>
          <div style={styles.spinner}>⏳</div>
          <h4 style={styles.loadingText}>Loading...</h4>
          <p style={styles.loadingSub}>Please wait while the Axios request is in progress.</p>
        </div>
      ) : !error && (
        /* SUCCESS STATE: First 5 Movie Titles */
        <div style={styles.movieContainer}>
          <h4 style={styles.listHeading}>Top 5 Movie Titles:</h4>
          <div style={styles.movieList}>
            {movies.map((movie, index) => (
              <div key={movie.id} style={styles.movieItem}>
                <div style={styles.rankBadge}>#{index + 1}</div>
                <div style={styles.movieDetails}>
                  <h4 style={styles.movieTitle}>{movie.title}</h4>
                  <span style={styles.movieGenre}>{movie.genre}</span>
                </div>
                <div style={styles.ratingBadge}>
                  ⭐ {movie.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "800px",
    margin: "24px auto",
    padding: "28px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
    fontFamily: "'Segoe UI', Roboto, sans-serif",
  },
  headerBadge: {
    display: "inline-block",
    padding: "4px 10px",
    backgroundColor: "#eff6ff",
    color: "#2563eb",
    fontSize: "12px",
    fontWeight: "700",
    borderRadius: "20px",
    marginBottom: "8px",
    letterSpacing: "0.5px",
  },
  title: {
    margin: "0 0 6px 0",
    color: "#0f172a",
    fontSize: "22px",
    fontWeight: "800",
  },
  subtitle: {
    margin: "0 0 16px 0",
    color: "#64748b",
    fontSize: "14px",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
    padding: "12px 16px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
  },
  btnSuccess: {
    backgroundColor: "#0284c7",
    color: "#ffffff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  },
  btnDanger: {
    backgroundColor: "#ef4444",
    color: "#ffffff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  },
  sourceTag: {
    marginLeft: "auto",
    fontSize: "12px",
    color: "#64748b",
  },
  errorBox: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "16px 20px",
    backgroundColor: "#fef2f2",
    color: "#991b1b",
    border: "1px solid #fecaca",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  retryBtn: {
    marginLeft: "auto",
    backgroundColor: "#991b1b",
    color: "#ffffff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
  },
  loadingBox: {
    textAlign: "center",
    padding: "48px 20px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    border: "1px dashed #cbd5e1",
  },
  spinner: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  loadingText: {
    margin: "0 0 6px 0",
    fontSize: "20px",
    color: "#0f172a",
    fontWeight: "700",
  },
  loadingSub: {
    margin: 0,
    fontSize: "14px",
    color: "#64748b",
  },
  movieContainer: {
    display: "flex",
    flexDirection: "column",
  },
  listHeading: {
    margin: "0 0 12px 0",
    fontSize: "16px",
    color: "#334155",
    fontWeight: "700",
  },
  movieList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  movieItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 18px",
    backgroundColor: "#f8fafc",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
  },
  rankBadge: {
    fontSize: "16px",
    fontWeight: "800",
    color: "#0284c7",
    width: "36px",
  },
  movieDetails: {
    flex: 1,
    marginLeft: "8px",
  },
  movieTitle: {
    margin: "0 0 2px 0",
    fontSize: "16px",
    color: "#0f172a",
    fontWeight: "600",
  },
  movieGenre: {
    fontSize: "12px",
    color: "#64748b",
  },
  ratingBadge: {
    backgroundColor: "#fef3c7",
    color: "#b45309",
    fontWeight: "700",
    fontSize: "13px",
    padding: "4px 8px",
    borderRadius: "6px",
  },
};

export default TrendingMovies;
