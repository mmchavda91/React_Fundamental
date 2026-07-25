import React from 'react';

function FollowerList({ followers }) {
  return (
    <div>
      <h2>Followers</h2>

      {followers.length > 0 ? (
        <ul>
          {followers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>No followers yet</p>
      )}
    </div>
  );
}

export default FollowerList;