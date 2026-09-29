import React, { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// FetchFix Component — Session 12 (Q4)
//
// This file demonstrates:
//   ❌ BUGGY version  → only catches network errors, ignores non-200 HTTP codes
//   ✅ FIXED version  → uses try/catch + response.ok to handle BOTH cases
// ─────────────────────────────────────────────────────────────────────────────

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ❌  BUGGY CODE (kept as comment for reference — DO NOT USE)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  useEffect(() => {
//    fetch('https://jsonplaceholder.typicode.com/invalidurl')
//      .then(res => res.json())          // ❌ BUG: calls .json() even on 404/500
//      .then(data => setData(data))      // ❌ BUG: data could be an error object
//      .catch(err => setError(true));    // ❌ BUG: only catches NETWORK errors,
//                                       //          NOT non-200 HTTP status codes
//  }, []);
//
// PROBLEM:
//   fetch() does NOT reject on HTTP errors (404, 500, etc.)
//   So .catch() is never reached for a 404 → setData(data) runs with bad data
//   You MUST manually check response.ok or response.status
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ✅  FIXED CODE  →  implemented below as a working React component
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const FetchFix = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ FIX: wrap in async function so we can use await + try/catch
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/invalidurl" // intentional 404
        );

        // ✅ FIX 1: Check response.ok — covers ALL non-2xx HTTP status codes
        //           (404, 500, 403 etc.) which fetch() does NOT throw on its own
        if (!response.ok) {
          throw new Error(
            `HTTP Error — Status: ${response.status} ${response.statusText}`
          );
        }

        // ✅ Safe to parse JSON only when status is 200-299
        const json = await response.json();
        setData(json);
      } catch (err) {
        // ✅ FIX 2: catch() now handles BOTH:
        //   • Network failures  (no internet, DNS failure, CORS etc.)
        //   • Non-200 HTTP codes (thrown manually above via response.ok check)
        // Note: console.error removed — 404 is intentional for this demo
        setError(true);
      } finally {
        setLoading(false); // always hide loader
      }
    };

    fetchData(); // call the async function
  }, []); // runs once on mount

  // ── Render ────────────────────────────────────────────────────
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Title */}
        <h2 style={styles.title}>🛠️ Fetch Error Handling — Fixed</h2>
        <p style={styles.subtitle}>Session 12 · Q4</p>

        {/* Bug vs Fix summary cards */}
        <div style={styles.compareGrid}>
          {/* Buggy */}
          <div style={{ ...styles.card, borderColor: "#f38ba8" }}>
            <h3 style={{ ...styles.cardTitle, color: "#f38ba8" }}>
              ❌ Buggy Code
            </h3>
            <pre style={styles.code}>{`useEffect(() => {
  fetch('/invalidurl')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => setError(true));
}, []);`}</pre>
            <ul style={styles.list}>
              <li>❌ <code>.json()</code> called even on 404 response</li>
              <li>❌ <code>.catch()</code> misses HTTP errors (404/500)</li>
              <li>❌ No HTTP status check at all</li>
            </ul>
          </div>

          {/* Fixed */}
          <div style={{ ...styles.card, borderColor: "#a6e3a1" }}>
            <h3 style={{ ...styles.cardTitle, color: "#a6e3a1" }}>
              ✅ Fixed Code
            </h3>
            <pre style={styles.code}>{`useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/invalidurl');

      if (!response.ok) {          // ✅ catches 404/500
        throw new Error('HTTP Error: ' + response.status);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {                // ✅ catches network + HTTP errors
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);`}</pre>
            <ul style={styles.list}>
              <li>✅ <code>response.ok</code> checks HTTP status (2xx = ok)</li>
              <li>✅ <code>throw</code> sends HTTP errors to <code>catch</code></li>
              <li>✅ <code>catch</code> handles network + HTTP errors both</li>
              <li>✅ <code>finally</code> always hides loader</li>
            </ul>
          </div>
        </div>

        {/* Live output of the fixed fetch */}
        <div style={styles.outputBox}>
          <h3 style={styles.outputTitle}>📡 Live Fetch Result</h3>

          {loading && <p style={styles.loading}>⏳ Fetching from invalidurl...</p>}

          {/* Error message shown for 404 (intentional invalid URL) */}
          {error && !loading && (
            <p style={styles.errorMsg}>
              ❌ Error loading data — HTTP 404 (Not Found) detected via{" "}
              <code>response.ok</code> check.
            </p>
          )}

          {data && !loading && (
            <pre style={styles.dataOutput}>{JSON.stringify(data, null, 2)}</pre>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Styles ────────────────────────────────────────────────────────
const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#11111b",
    padding: "32px 16px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
    color: "#cdd6f4",
  },
  title: {
    textAlign: "center",
    color: "#cba6f7",
    fontSize: "28px",
    margin: "0 0 4px",
  },
  subtitle: {
    textAlign: "center",
    color: "#6c7086",
    fontSize: "13px",
    marginBottom: "32px",
  },
  compareGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
    marginBottom: "32px",
  },
  card: {
    backgroundColor: "#1e1e2e",
    borderRadius: "12px",
    padding: "20px",
    border: "1px solid",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 12px",
  },
  code: {
    backgroundColor: "#181825",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "11px",
    color: "#cdd6f4",
    overflowX: "auto",
    lineHeight: "1.7",
    margin: "0 0 12px",
  },
  list: {
    paddingLeft: "16px",
    margin: 0,
    fontSize: "13px",
    lineHeight: "2",
    color: "#bac2de",
  },
  outputBox: {
    backgroundColor: "#1e1e2e",
    borderRadius: "12px",
    padding: "24px",
    border: "1px solid #313244",
  },
  outputTitle: {
    color: "#89b4fa",
    fontSize: "16px",
    margin: "0 0 16px",
  },
  loading: {
    color: "#89b4fa",
    fontSize: "15px",
  },
  errorMsg: {
    color: "#f38ba8",
    fontWeight: "bold",
    fontSize: "15px",
    border: "1px solid #f38ba8",
    borderRadius: "8px",
    padding: "12px 16px",
  },
  dataOutput: {
    backgroundColor: "#181825",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "12px",
    color: "#a6e3a1",
    overflowX: "auto",
  },
};

export default FetchFix;
