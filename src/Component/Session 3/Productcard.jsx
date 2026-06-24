import React from 'react'

function Productcard(props) {
  return (
    <div>
        <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        width: "200px",
        textAlign: "center",
      }}
    >

      <h3>{props.productName}</h3>
      <p>Price: ₹{props.price}</p>
    </div>
    </div>
  
  )
}

export default Productcard

