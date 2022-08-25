import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(props.children);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;
    quantity = quantity + product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const taxInt = parseFloat(tax);
  const grandTotal = total + shipping + taxInt;
  return (
    <div className="cart">
      <h3>Order Summery</h3>
      <p>Select Item :{quantity}</p>
      <p>Price :${total}</p>
      <p>Total Shipping :${shipping}</p>
      <p>Tax :{tax}</p>
      <h5>Grand Total :{grandTotal}</h5>
      {props.children}
    </div>
  );
};

export default Cart;
