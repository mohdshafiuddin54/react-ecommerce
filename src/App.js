import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import config from "./config.json";
import NavBar from "./components/navbar";
import styled from "styled-components";
import Context from "./context";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import Detail from "./components/detail";
import Land from "./pages/Land";

const Div = styled.div`
  // margin-bottom: 4.8rem;
`;
function App() {
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [cart, setCart] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [paginationValue, setPaginationValue] = useState(12);

  async function fetchData(url) {
    let tempData = await fetch(url);
    tempData = await tempData.json();
    setPageNum(1);
    setData(tempData.result.products);
  }
  useEffect(() => {
    fetchData(config.api);
  }, []);
  const paginatedData = data
    ? data.slice(pageNum * 12 - 12, pageNum * 12)
    : null;

  const paginationLength = data.length > 0 && data.length / 12;

  function findAndSetActiveProduct(id) {
    if (data.length == 0) {
      console.log("calling fetch");
      fetchData(config.api);
    }
    console.log("data len", data.length);
    console.log({ id });
    console.log({ data });
    const res = data.find((item) => item.id_product == id);
    console.log({ res });
    setActiveProduct(res);
  }

  // findAndSetActiveProduct(88638);
  return (
    <Div>
      <Context.Provider
        value={{
          data,
          setData,
          pageNum,
          setPageNum,
          paginatedData,
          cart,
          setCart,
          fetchData,
          activeProduct,
          setActiveProduct,
          findAndSetActiveProduct,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Land />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/product2/:id" element={<Detail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/test" element={<Detail />} />
          <Route path="/*" element={<ProductList />} />
        </Routes>
      </Context.Provider>
    </Div>
  );
}

export default App;
