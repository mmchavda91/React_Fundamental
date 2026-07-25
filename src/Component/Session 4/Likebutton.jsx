import React, {useState} from 'react'

function Likebutton() {
// State variable
 const [likes, setLikes] = useState(0);
  // Function to increase likes
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h2>❤️ Likes: {likes}</h2>

      <button onClick={handleLike}>
        ❤️ Like
  </button>

    </div>
  )
}

export default Likebutton;
