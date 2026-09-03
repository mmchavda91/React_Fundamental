import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state > 0 ? state - 1 : 0;

    case "reset":
      return 0;

    default:
      return state;
  }
}

function PlaylistCounter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Playlist Songs: {count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
        disabled={count === 0}
      >
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default PlaylistCounter;