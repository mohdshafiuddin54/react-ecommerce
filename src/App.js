import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import config from "./config.json";
import NavBar from "./components/navbar";
import styled from "styled-components";
import Context from "./context";
import ProductPage from "./pages/ProductPage";
import ProductList from "./pages/ProductList";

const Div = styled.div`
  // margin-bottom: 4.8rem;
`;
function App() {
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [cart, setCart] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [paginationValue, setPaginationValue] = useState(12);
  useEffect(() => {
    const inner = async () => {
      let tempData = await fetch(config.api);
      tempData = await tempData.json();
      setData(tempData.result.products);
    };
    inner();
  }, []);
  const paginatedData = data
    ? data.slice(pageNum * 12 - 12, pageNum * 12)
    : null;

  // console.log({ cart });
  const paginationLength = data.length > 0 && data.length / 12;
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
          activeProduct,
          setActiveProduct,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product" element={<ProductPage />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
        {/* {data.length > 0 && <Pagination />} */}
        {/* <ProductPage /> */}
      </Context.Provider>
    </Div>
  );
}

export default App;
