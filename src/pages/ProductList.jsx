import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Context from "../contexts/context";
import Pagination from "../components/Paginations.jsx";
import TestCard from "../components/Card";
import config from "../config.json";
import fetchData from "../util/fetchData";
import {
  IconButton,
  Button,
  Snackbar,
  Box,
  Typography,
  Alert,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.4rem 0;
  padding: 0 2.4rem;
  justify-items: center;
  margin-top: 2.4rem;
`;
function ProductList() {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "top-wear-kurtas";

  useEffect(() => {
    (async () => {
      let tempData = await fetchData(category);
      setData(tempData);
    })();
  }, [searchParams]);

  const paginatedData = data
    ? data.slice(
        pageNum * process.env.REACT_APP_PAGINATION_VALUE -
          process.env.REACT_APP_PAGINATION_VALUE,
        pageNum * process.env.REACT_APP_PAGINATION_VALUE
      )
    : null;

  const { setCart, cart } = useContext(Context);

  const [snack, setSnack] = useState(false);
  let products = paginatedData ? paginatedData : null;
  const removeItem = () => {
    const newCart = cart.pop();
    setCart(newCart);
  };

  return (
    <>
      <Div>
        {products ? (
          <ProductListUtil
            products={products}
            snack={snack}
            setSnack={setSnack}
            category={category}
          />
        ) : (
          <h1>Loading Data.....</h1>
        )}
      </Div>
      {products ? (
        <Pagination pageNum={pageNum} setPageNum={setPageNum} data={data} />
      ) : null}
      <Snackbar
        open={snack}
        autoHideDuration={5000}
        onClose={() => setSnack(false)}
      >
        <Alert
          onClose={() => setSnack(false)}
          severity="info"
          variant="filled"
          sx={{ fontSize: "1.6rem", fontWeight: 700 }}
        >
          Item Successfully Added to Cart
        </Alert>
      </Snackbar>
    </>
  );
}

function ProductListUtil({ products, snack, setSnack, category }) {
  let i = 0;
  const { setCart } = useContext(Context);
  return (
    <>
      {products.map((item) => (
        <TestCard
          key={i++}
          product={item}
          setCart={setCart}
          name={item.name}
          price={item.price}
          image={item.image}
          snack={snack}
          setSnack={setSnack}
          category={category}
        />
      ))}
    </>
  );
}

export default ProductList;
