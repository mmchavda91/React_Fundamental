import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state > 1 ? state - 1 : 1;

    case "reset":
      return 1;

    default:
      return state;
  }
}

function Cartitem() {
  const [quantity, dispatch] = useReducer(reducer, 1);

  return (
    <div>
      <h2>Cart Item</h2>

      <p>Quantity: {quantity}</p>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>

      <span style={{ margin: "0 15px" }}>{quantity}</span>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <br />
      <br />

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default Cartitem;