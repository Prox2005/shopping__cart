import React, { useState } from "react";
import List from "./List";
import "./navbar.css";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
