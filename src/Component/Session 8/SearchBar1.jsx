import React, { useRef, useEffect } from "react";

function SearchBar1() {
  const inputRef = useRef();

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Search Bar</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter your search..."
        className="form-control mb-3"
      />

      <button className="btn btn-primary">
        Search
      </button>
    </div>
  );
}

export default SearchBar1;