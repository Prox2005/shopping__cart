import React from "react";
import "./productCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="app__product">
      <img src={product.image} alt="product image" />
      <h3>{product.name}</h3>
      <span>{product.price}</span>
    </div>
  );
};

export default ProductCard;
