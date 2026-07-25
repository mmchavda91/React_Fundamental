import React from "react";

function OrderStatus({ isDelivered }) {
  return (
    <div>
      <h2>
        {isDelivered ? "Order Delivered 🎉" : "Order on the way 🚚"}
      </h2>
    </div>
  );
}

export default OrderStatus;