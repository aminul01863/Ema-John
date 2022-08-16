import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handelAddTooCart = (product) => {
    console.log(product);
  };
  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              handelAddTooCart={handelAddTooCart}
              key={product.id}
              product={product}></Product>
          ))}
        </div>
        <div className="cart-container">
          <h1>this is cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Shop;
