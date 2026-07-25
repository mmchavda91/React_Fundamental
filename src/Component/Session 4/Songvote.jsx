import React, { useState }  from 'react'

function Songvote() {


    // Vote count starts from 0
  const [votes, setVotes] = useState(0);

  // Increase vote
  const upVote = () => {
    setVotes(votes + 1);
  };

  // Decrease vote (not below 0)
  const downVote = () => {
    if (votes > 0) {
      setVotes(votes - 1);
    }
  };
  return (
    <div
      style={{
        width: "350px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>🎵 Shape of You</h2>
      <p>Artist: Ed Sheeran</p>

      <h3>Votes: {votes}</h3>

      <button onClick={upVote}>⬆ Upvote</button>

      <span style={{ margin: "0 20px" }}>{votes}</span>

      <button onClick={downVote}>⬇ Downvote</button>
    </div>
  )
}

export default Songvote