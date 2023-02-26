import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import bgimage from "../../assets/background.jpg";

const Home = () => {
  useEffect(() => {
    const root = document.querySelector("#root");
    root.style.backgroundImage = `url(${bgimage})`;
  }, []);
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
