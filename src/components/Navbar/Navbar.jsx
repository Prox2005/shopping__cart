import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const List = () => {
    return (
      <>
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
                <AiOutlineShoppingCart cursor="pointer" size={20} />
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  };
  return (
    <div className="app__navbar">
      <h2>Adidas Shop</h2>
      <div className="app__navbar-menu">
        <List />
      </div>
      <div className="app__navbar-more">
        {toggleMenu ? (
          <MdExpandLess size={30} onClick={() => setToggleMenu(false)} />
        ) : (
          <MdExpandMore size={30} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div>
            <List />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
