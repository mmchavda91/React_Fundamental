import React from "react";

function CartSummary({ cartItems }) {
  return (
    <div>
        
      <h2>Cart Summary</h2>

      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>

          {cartItems.length >= 3 ? (
            <button>Checkout Now</button>
          ) : null}
        </>
      ) : (
        <h3>Cart is empty</h3>
      )}
    </div>
  );
}

export default CartSummary;