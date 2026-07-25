import React, { useState } from 'react'

function Cartitem() {
// Quantity state starts from 1
  const [quantity, setQuantity] = useState(1);

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div
     style={{
        width: "300px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        textAlign: "center",
      }}>
         <h2>📱 Samsung Galaxy S24</h2>

      <h3>Quantity: {quantity}</h3>

      <button onClick={decreaseQuantity}>-</button>

      <span style={{ margin: "0 20px", fontSize: "20px" }}>
        {quantity}
      </span>

      <button onClick={increaseQuantity}>+</button>
    </div>
  )
}

export default Cartitem