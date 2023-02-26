import React, { useEffect, useState } from "react";
import catalog from "../../data/products";
import { ProductCard } from "../../components/";
import "./shop.css";

const Shop = () => {
  useEffect(() => {
    const root = document.querySelector("#root");
    root.style.background = "black";
  }, []);

  return (
    <div className="app__shop">
      <section className="app__shop-header">
        <h1>Catalog</h1>
      </section>
      <section className="app__shop-catalog">
        {catalog.map((x) => (
          <ProductCard key={x.id} product={x} />
        ))}
      </section>
    </div>
  );
};

export default Shop;
