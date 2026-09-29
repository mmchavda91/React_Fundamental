import React, { useState } from "react";
import axios from "axios";

/**
 * ==============================================================================
 * React - Session 11 (Question 2)
 * ==============================================================================
 * Task:
 * Create a React component called AddPlaylist that lets a user enter a playlist
 * name and description, then use Axios to POST this data to
 * https://jsonplaceholder.typicode.com/posts and show a success message when the
 * request completes.
 * ==============================================================================
 */
function AddPlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!playlistName.trim()) {
      setErrorMessage("Please enter a playlist name.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Axios POST request to jsonplaceholder API
      const payload = {
        title: playlistName, // maps to title in mock API
        name: playlistName,
        body: description,   // maps to body in mock API
        description: description,
        userId: 1,
      };

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        payload
      );

      // Show success message and saved response
      setSuccessMessage(
        `🎉 Playlist "${playlistName}" added successfully! (Server Response Status: ${response.status} Created)`
      );
      setSubmittedData(response.data);

      // Reset form fields
      setPlaylistName("");
      setDescription("");
    } catch (error) {
      console.error("Error creating playlist:", error);
      setErrorMessage(
        error.response?.data?.message || "Failed to add playlist. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.headerBadge}>SESSION 11 - QUESTION 2</div>
      <h3 style={styles.title}>🎵 Add New Playlist (Axios POST)</h3>
      <p style={styles.subtitle}>
        Enter playlist details to POST data to <code>https://jsonplaceholder.typicode.com/posts</code> using Axios.
      </p>

      {/* Success Notification Message */}
      {successMessage && (
        <div style={styles.successAlert}>
          <strong>Success!</strong> {successMessage}
        </div>
      )}

      {/* Error Alert */}
      {errorMessage && (
        <div style={styles.errorAlert}>
          <strong>Error:</strong> {errorMessage}
        </div>
      )}

      {/* Playlist Submission Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Playlist Name <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. My Favorites 2026, Chill Beats..."
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            style={styles.input}
            disabled={loading}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Description</label>
          <textarea
            placeholder="e.g. Best tracks for coding and relaxing..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
            rows="3"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            ...styles.submitBtn,
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "⏳ Submitting via Axios..." : "➕ Create Playlist"}
        </button>
      </form>

      {/* Display Response Data if available */}
      {submittedData && (
        <div style={styles.responseBox}>
          <h4 style={styles.responseTitle}>Server Response (Axios POST Result):</h4>
          <pre style={styles.preCode}>
            {JSON.stringify(submittedData, null, 2)}
          </pre>
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
    margin: "0 0 20px 0",
    color: "#64748b",
    fontSize: "14px",
  },
  successAlert: {
    backgroundColor: "#ecfdf5",
    color: "#065f46",
    border: "1px solid #a7f3d0",
    padding: "12px 16px",
    borderRadius: "10px",
    marginBottom: "18px",
    fontSize: "14px",
  },
  errorAlert: {
    backgroundColor: "#fef2f2",
    color: "#991b1b",
    border: "1px solid #fecaca",
    padding: "12px 16px",
    borderRadius: "10px",
    marginBottom: "18px",
    fontSize: "14px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#334155",
  },
  input: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s ease",
  },
  textarea: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    fontFamily: "inherit",
    outline: "none",
    resize: "vertical",
  },
  submitBtn: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "700",
    transition: "background-color 0.2s ease",
    alignSelf: "flex-start",
  },
  responseBox: {
    marginTop: "24px",
    padding: "16px",
    backgroundColor: "#f8fafc",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
  },
  responseTitle: {
    margin: "0 0 10px 0",
    fontSize: "13px",
    fontWeight: "700",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  preCode: {
    margin: 0,
    backgroundColor: "#1e293b",
    color: "#38bdf8",
    padding: "14px",
    borderRadius: "8px",
    fontSize: "13px",
    overflowX: "auto",
  },
};

export default AddPlaylist;
