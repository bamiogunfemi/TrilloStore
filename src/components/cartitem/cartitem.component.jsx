import React from "react";
import "./cartitem.style.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="item-details">
        <span className="name">{name}</span>
        <span className="price">
         {quantity} x ${price}
        </span>
      </span>
    </div>
  </div>
);

export default CartItem;
