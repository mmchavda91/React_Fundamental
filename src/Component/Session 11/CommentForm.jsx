import React, { useState } from "react";
import axios from "axios";

/**
 * ==============================================================================
 * React - Session 11 (Question 5)
 * ==============================================================================
 * Task:
 * Use ChatGPT or GitHub Copilot to generate an example of an Axios POST request
 * in React, then adapt the code to submit a new comment (with fields: username
 * and comment) to https://jsonplaceholder.typicode.com/comments and display
 * the response below your form.
 * ==============================================================================
 */
function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [commentList, setCommentList] = useState([]);

  // Handles submitting comment via Axios POST request
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !comment.trim()) {
      setError("Both Username and Comment fields are required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Adapted Axios POST request to jsonplaceholder comments endpoint
      const payload = {
        name: username.trim(),
        email: `${username.trim().toLowerCase().replace(/\s+/g, ".")}@example.com`,
        body: comment.trim(),
        postId: 1, // Default post ID for demonstration
      };

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        payload
      );

      // Save the response object to display below the form
      setResponseData(response);

      // Add to local preview list of comments
      setCommentList((prev) => [
        {
          id: response.data.id || Date.now(),
          username: username.trim(),
          comment: comment.trim(),
          createdAt: new Date().toLocaleTimeString(),
        },
        ...prev,
      ]);

      // Reset form input fields
      setUsername("");
      setComment("");
    } catch (err) {
      console.error("Axios POST error:", err);
      setError(
        err.response?.data?.message || err.message || "Failed to submit comment."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.headerBadge}>SESSION 11 - QUESTION 5</div>
      <h3 style={styles.title}>💬 Submit New Comment (Axios POST)</h3>
      <p style={styles.subtitle}>
        Submits comment data (username & comment) to{" "}
        <code>https://jsonplaceholder.typicode.com/comments</code> and displays the response below.
      </p>

      {/* Error Alert */}
      {error && (
        <div style={styles.errorAlert}>
          ⚠️ {error}
        </div>
      )}

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Username <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Mamta Chavda"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            disabled={loading}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Comment <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <textarea
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
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
          {loading ? "⏳ Submitting via Axios POST..." : "🚀 Post Comment"}
        </button>
      </form>

      {/* ========================================================= */}
      {/* DISPLAY RESPONSE BELOW THE FORM (As required by Question 5) */}
      {/* ========================================================= */}
      {responseData && (
        <div style={styles.responseContainer}>
          <div style={styles.responseHeader}>
            <span style={styles.statusPill}>
              ✅ Status: {responseData.status} ({responseData.statusText || "Created"})
            </span>
            <span style={{ fontSize: "12px", color: "#64748b" }}>
              API: <code>jsonplaceholder.typicode.com/comments</code>
            </span>
          </div>

          <h4 style={styles.responseHeading}>📥 Response Data from Server:</h4>

          {/* Formatted JSON view */}
          <pre style={styles.jsonBox}>
            {JSON.stringify(responseData.data, null, 2)}
          </pre>

          {/* Visual Comment Preview Card */}
          <div style={styles.commentPreview}>
            <div style={styles.previewAvatar}>👤</div>
            <div style={{ flex: 1 }}>
              <div style={styles.previewUserRow}>
                <strong>{responseData.data.name}</strong>
                <span style={styles.previewId}>Comment ID: #{responseData.data.id}</span>
              </div>
              <p style={styles.previewText}>"{responseData.data.body}"</p>
            </div>
          </div>
        </div>
      )}

      {/* List of comments posted in this session */}
      {commentList.length > 1 && (
        <div style={{ marginTop: "24px" }}>
          <h4 style={styles.recentHeading}>Previous Comments in this session:</h4>
          <div style={styles.commentHistoryList}>
            {commentList.slice(1).map((item) => (
              <div key={item.id} style={styles.historyItem}>
                <strong>{item.username}</strong>
                <span style={styles.timeTag}>{item.createdAt}</span>
                <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "#475569" }}>
                  {item.comment}
                </p>
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
    margin: "0 0 20px 0",
    color: "#64748b",
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
    backgroundColor: "#059669",
    color: "#ffffff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    alignSelf: "flex-start",
    transition: "background-color 0.2s ease",
  },
  responseContainer: {
    marginTop: "28px",
    padding: "20px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
  },
  responseHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "14px",
  },
  statusPill: {
    backgroundColor: "#ecfdf5",
    color: "#065f46",
    fontWeight: "700",
    fontSize: "13px",
    padding: "4px 10px",
    borderRadius: "20px",
    border: "1px solid #a7f3d0",
  },
  responseHeading: {
    margin: "0 0 10px 0",
    fontSize: "14px",
    color: "#334155",
    fontWeight: "700",
  },
  jsonBox: {
    margin: "0 0 16px 0",
    backgroundColor: "#1e293b",
    color: "#38bdf8",
    padding: "14px",
    borderRadius: "8px",
    fontSize: "13px",
    overflowX: "auto",
  },
  commentPreview: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    padding: "14px 16px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
  },
  previewAvatar: {
    fontSize: "24px",
  },
  previewUserRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "4px",
  },
  previewId: {
    fontSize: "12px",
    color: "#64748b",
    backgroundColor: "#f1f5f9",
    padding: "2px 6px",
    borderRadius: "4px",
  },
  previewText: {
    margin: 0,
    fontSize: "14px",
    color: "#1e293b",
  },
  recentHeading: {
    fontSize: "14px",
    color: "#475569",
    marginBottom: "10px",
  },
  commentHistoryList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  historyItem: {
    padding: "10px 14px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },
  timeTag: {
    fontSize: "11px",
    color: "#94a3b8",
    marginLeft: "8px",
  },
};

export default CommentForm;
