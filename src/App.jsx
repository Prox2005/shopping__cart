import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, Shop, Product, Cart } from "./pages";
import { Navbar } from "./components";
import "./App.css";

function App() {
  const [bagProducts, setbagProducts] = useState([]);
  useEffect(() => {}, [bagProducts]);

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
            element={<Product setbagProducts={setbagProducts} bagProducts={bagProducts} />}
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
