import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);


  return (
    <div>
      {cartItems?.map((item,idx) => (
        <ul key={idx}>
          <li>{item.Category}</li>
          <li>{item.Brand}</li>
          <li>{item.quantity}</li>
          <li>{item.Price}</li>
        </ul>
      ))}
    </div>
  );
};

export default Cart;
