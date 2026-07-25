//Before (Fetch on Button Click)

import React, { useState } from "react";

function UserData() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>User List</h2>

      <button onClick={fetchUsers}>Load Users</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserData;