import React from "react";
import { Link, useParams } from "react-router-dom";
import "./product.css";
import catalog from "../../data/products";
import { AiOutlineRollback } from "react-icons/ai";

const Product = ({ addProduct, bagProducts }) => {
  const { id } = useParams();
  const product = catalog.filter((x) => x.id === id)[0];

  return (
    <div className="app__product">
      <div className="app__product-back">
        <Link to="/shop">
          <AiOutlineRollback fill="black" size={25} cursor="pointer" />
        </Link>
      </div>
      <section className="app__product-img">
        <img src={product.image} alt="products image" />
      </section>

      <section className="app__product-cart">
        <h1 className="app__product-name">{product.name}</h1>
        <h3 className="app__product-cart-price">{product.price}</h3>

        <Link to="/cart">
          <button
            type="button"
            className="app__product-add"
            onClick={() => {
              addProduct(product);
            }}
          >
            Add
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Product;
