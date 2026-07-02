import React from 'react'

function Defaultuserprofile(props) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid black",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={props.profilePic}
        alt="Profile"
        width="100"
        height="100"
        style={{ borderRadius: "50%" }}
      />

      <h2>{props.username}</h2>
      <p>{props.followers} Followers</p>
    </div>
  );
}

// Default Props
Defaultuserprofile.defaultProps = {
  followers: 0,
  profilePic: "https://via.placeholder.com/100",
};

  


export default Defaultuserprofile