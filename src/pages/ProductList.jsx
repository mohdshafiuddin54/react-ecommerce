import React, { useContext, useState } from "react";
import styled from "styled-components";
import Context from "../context";
import Pagination from "../components/Paginations.jsx";
import TestCard from "../components/Card";
import {
  IconButton,
  Button,
  Snackbar,
  Box,
  Typography,
  Alert,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.4rem 0;
  padding: 0 2.4rem;
  justify-items: center;
  margin-top: 2.4rem;
`;
function ProductList() {
  const { paginatedData: data, setCart, cart } = useContext(Context);
  const [snack, setSnack] = useState(false);
  let products = data ? data : null;
  const removeItem = () => {
    const newCart = cart.pop();
    setCart(newCart);
  };
  const action = (
    <>
      <Button size="small" onClick={removeItem} sx={{ color: "#3b5bdb" }}>
        Undo
      </Button>
      <IconButton size="small" color="inherit" onClick={() => setSnack(false)}>
        <Close fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <Div>
        {products ? (
          <ProductListUtil
            products={products}
            snack={snack}
            setSnack={setSnack}
          />
        ) : (
          <h1>Loading Data.....</h1>
        )}
      </Div>
      {products ? <Pagination /> : null}
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

function ProductListUtil({ products, snack, setSnack }) {
  let i = 0;
  const { paginatedData: data, setCart } = useContext(Context);
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
        />
      ))}
    </>
  );
}

export default ProductList;
