import React from 'react'
import  propTypes from 'prop-types';
function Userprofile(props) {
  return (
     <div
      style={{
        width: "250px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        margin: "10px",
      }}
    >
      <img
        src={props.profilePic}
        alt="Profile"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        }}
      />

      <h2>{props.username}</h2>

      <p>{props.followers} Followers</p>

      <button>Follow</button>
    </div>
  )
}

export default Userprofile