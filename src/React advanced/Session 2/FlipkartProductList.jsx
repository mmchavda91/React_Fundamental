import React from "react";
import useFetchData from "./useFetchData";

function FlipkartProductList() {

  const {
    loading,
    data,
    error
  } = useFetchData("https://fakestoreapi.com/products");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Flipkart Product List</h1>

      {data.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default FlipkartProductList;