import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="app__home">
      <h1>
        Welcome to <span>Adidas</span> Shop Cart page
      </h1>
      <button type="button">
        <Link className="button-link" to="/shop">
          Shop
        </Link>
      </button>
    </div>
  );
};

export default Home;
