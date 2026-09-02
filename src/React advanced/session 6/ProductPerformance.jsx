import React, { useCallback, useMemo, useState } from "react";

const ProductItem = React.memo(function ProductItem({
  product,
  onSelect
}) {
  console.log("Rendering:", product.name);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "5px",
        width: "300px"
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>

      <button onClick={() => onSelect(product.id)}>
        Select
      </button>
    </div>
  );
});

function ProductPerformance() {
  const [count, setCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Large list ko memoize kar rahe hain
  const products = useMemo(() => {
    console.log("Creating 1000 products...");

    return Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: (index + 1) * 100
    }));
  }, []);

  // Function ko memoize kar rahe hain
  const handleSelect = useCallback((id) => {
    setSelectedProduct(id);
  }, []);

  return (
    <div>
      <h1>Product Performance Demo</h1>

      <button onClick={() => setCount(count + 1)}>
        Click Me: {count}
      </button>

      {selectedProduct && (
        <h3>Selected Product ID: {selectedProduct}</h3>
      )}

      <hr />

      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}

export default ProductPerformance;