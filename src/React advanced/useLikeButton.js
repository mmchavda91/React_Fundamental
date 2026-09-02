import { useState } from "react";

function useLikeButton(initialLikes = 0) {

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  const toggleLike = () => {

    if (isLiked) {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    }

  };

  return {
    isLiked,
    likeCount,
    toggleLike
  };
}

export default useLikeButton;