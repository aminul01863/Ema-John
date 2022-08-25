import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = (props) => {
  const { product, handelRemoveProduct } = props;
  const { name, img, shipping, quantity, price } = product;
  return (
    <div className="review-item">
      <div className="detail-img">
        <img src={img} alt="" />
      </div>
      <div className="review-item-detail-container">
        <div className="review-detail-container">
          <p>
            <small className="product-name" title={name}>
              Name : {name.length > 20 ? name.slice(0, 20) + "..." : name}
            </small>
          </p>
          <p>
            <span>Price : ${price}</span>
          </p>
          <p>
            <span>Shipping : {shipping}</span>
          </p>
          <p>
            <span>quantity : {quantity}</span>
          </p>
        </div>
        <div className="delete-btn-container">
          <button
            onClick={() => handelRemoveProduct(product)}
            className="delete-btn">
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
