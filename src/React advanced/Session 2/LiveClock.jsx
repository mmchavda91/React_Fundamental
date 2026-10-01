import React from "react";
import useCurrentTime from "./useCurrentTime";

function LiveClock() {

  const currentTime = useCurrentTime();

  return (
    <div>
      <h1>Live Clock</h1>

      <h2>
        {currentTime.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default LiveClock;