import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ bagProducts, removeProduct }) => {
  const RenderProduct = ({ product }) => {
    return (
      <ul>
        <h1>{product.name}</h1>
        <li>
          <img src={product.image} alt="product-image" />
          <span>{product.price}</span>
          <button type="button" onClick={() => alert("Thanks for visiting us")}>
            Checkout
          </button>
          <AiOutlineClose
            fill="red"
            size={30}
            cursor="pointer"
            onClick={() => removeProduct(product)}
          />
        </li>
      </ul>
    );
  };

  const NoProducts = () => {
    return (
      <div className="app__no-products">
        <h2 className="">No Products Added ...</h2>
        <Link to="/shop">
          <button type="button">Shop</button>
        </Link>
      </div>
    );
  };

  return (
    <div className="app__cart">
      <h1 className="app__cart-title">Your Shop Cart</h1>
      {bagProducts.length === 0 ? (
        <NoProducts />
      ) : (
        <section className="app__cart-products">
          {bagProducts.map((product) => (
            <RenderProduct key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Cart;
