import React from "react";
import cartIcon from "../../Assets/cart2.svg";
import "./CartWidget.css";

export default function CartWidget() {
  return (
    <div className="icon-container">
      <img src={cartIcon} alt="cart" />
      <h6>0</h6>
    </div>
  );
}
