import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import styled from "styled-components";
import Context from "./contexts/context";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import Detail from "./pages/Detail";
import Land from "./pages/Land";

const Div = styled.div``;
function App() {
  const [cart, setCart] = useState([]);

  return (
    <Div>
      <Context.Provider
        value={{
          cart,
          setCart,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Land />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/product" element={<Detail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/test" element={<Detail />} />
          <Route path="/*" element={<ProductList />} />
        </Routes>
      </Context.Provider>
    </Div>
  );
}

export default App;
