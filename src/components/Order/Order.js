import React, { createRef } from "react";
import useCart from "../../useProduct/useCart";
import useProduct from "../../useProduct/UseProduct";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);
  const handelRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.name}
            product={product}
            handelRemoveProduct={handelRemoveProduct}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/inventory">
            <button>Proceed checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
