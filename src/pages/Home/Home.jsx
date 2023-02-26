import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="app__home">
      <h1>
        Welcome to <span>Adidas</span> Shop Cart page
      </h1>
      <Link className="button-link" to="/shop">
        <button type="button">Shop</button>
      </Link>
    </div>
  );
};

export default Home;
