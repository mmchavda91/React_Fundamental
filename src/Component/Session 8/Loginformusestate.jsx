import React, {useState, useRef}from 'react'

function Loginformusestate() {
     const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef();

  const handleLogin = () => {
    alert("Login Button Clicked!");

    // Clear the input fields
    setUsername("");
    setPassword("");

    // Focus the username input
    usernameRef.current.focus();
  };
  return (
    <div className="container mt-4">
      <h2>Login Form</h2>

      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          ref={usernameRef}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
      </div>

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
export default Loginformusestate