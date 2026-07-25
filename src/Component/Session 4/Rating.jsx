import React, {useState}from 'react'

function Rating() {

// Selected rating (starts from 0)
  const [rating, setRating] = useState(0);



  return (
     <div
      style={{
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <h2>🍽️ Zomato Rating</h2>

      <h3>Rate this Restaurant</h3>

      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "40px",
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}

      <h3>Your Rating: {rating} ⭐</h3>
    </div>
  )
}

export default Rating