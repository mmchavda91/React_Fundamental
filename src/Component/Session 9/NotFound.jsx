import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1 style={{ fontSize: "50px", color: "red" }}>
        404
      </h1>

      <h2>Page Not Found</h2>

      <p>Sorry! The page you are looking for doesn't exist.</p>

      <NavLink to="/">
        Go Back to Home
      </NavLink>
    </div>
  );
}

export default NotFound;