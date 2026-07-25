import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>👍 Likes: {count}</h2>

      <button onClick={handleLike}>
        Like
      </button>
    </div>
  );
}

export default LikeButton;