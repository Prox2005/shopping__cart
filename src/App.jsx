import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, Shop, Product, Cart } from "./pages";
import { Navbar } from "./components";
import "./App.css";

function App() {
  const [bagProducts, setbagProducts] = useState([]);
  useEffect(() => {}, [bagProducts]);

  function addProduct(product) {
    if (bagProducts.find((x) => x.id === product.id)) {
      alert("You can't add the same item twice");
      return;
    }
    setbagProducts([...bagProducts, product]);
  }

  function removeProduct(product) {
    setbagProducts(bagProducts.filter((x) => x !== product));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/product/:id"
            element={<Product addProduct={addProduct} bagProducts={bagProducts} />}
          />
          <Route
            path="/cart"
            element={<Cart bagProducts={bagProducts} removeProduct={removeProduct} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
