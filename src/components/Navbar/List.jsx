import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const List = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <AiOutlineShoppingCart cursor="pointer" color="black" size="22" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default List;
