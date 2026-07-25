import React, { useState, useRef } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const messageRef = useRef();

  const handleFocus = () => {
    messageRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Feedback Submitted!\n\nName: ${name}\nMessage: ${message}`
    );

    // Clear the form
    setName("");
    setMessage("");
  };

  return (
    <div className="container mt-4">
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={messageRef}
          ></textarea>
        </div>

        <button type="button" className="btn btn-secondary me-2" onClick={handleFocus}>
          Focus Message
        </button>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;