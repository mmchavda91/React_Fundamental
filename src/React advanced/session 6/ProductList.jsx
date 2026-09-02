import React, { useMemo, useState } from "react";

function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");

  // 1000 products
  const products = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (index + 1) * 100
  }));

  // Filtered list useMemo se calculate hogi
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <div>
      <h1>Product List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h3>
        Showing {filteredProducts.length} products
      </h3>

      {/* Product List */}
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;