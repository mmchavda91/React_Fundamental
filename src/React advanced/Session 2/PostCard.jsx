import React from "react";
import useLikeButton from "./useLikeButton";

function PostCard() {

  const {
    isLiked,
    likeCount,
    toggleLike
  } = useLikeButton(120);

  return (
    <div
      style={{
        width: "350px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "30px auto",
        fontFamily: "Arial"
      }}
    >

      <h2>Instagram Post</h2>

      <p>
        Beautiful day! ❤️
      </p>

      <button
        onClick={toggleLike}
        style={{
          border: "none",
          background: "none",
          fontSize: "30px",
          cursor: "pointer"
        }}
      >
        {isLiked ? "❤️" : "🤍"}
      </button>

      <p>
        <strong>{likeCount} likes</strong>
      </p>

    </div>
  );
}

export default PostCard;