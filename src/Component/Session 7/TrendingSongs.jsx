import React, { useEffect } from "react";

function TrendingSongs() {

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <h2>🎵 Trending Songs</h2>
      <p>Welcome to the Trending Songs component.</p>
    </div>
  );
}

export default TrendingSongs;