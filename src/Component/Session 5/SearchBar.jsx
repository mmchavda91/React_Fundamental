import React, { useState } from "react";

function SearchBar() {
  const [product, setProduct] = useState("");

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🛒 Flipkart Search</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={product}
        onChange={handleChange}
        style={{
          padding: "10px",
          width: "250px",
          fontSize: "16px"
        }}
      />

      <h3>You searched: {product}</h3>
    </div>
  );
}

export default SearchBar;