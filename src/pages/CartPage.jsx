import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import styled from "styled-components";
import Context from "../contexts/context";
import {
  Button,
  Alert,
  Snackbar,
  Backdrop,
  Typography,
  Box,
  AlertTitle,
} from "@mui/material";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  background: #edf2ff;
  padding: 0 2.4rem 4.8rem;
  padding-bottom: 4.8rem;

  .products {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 2.4rem;
    padding-bottom: 2.4rem;
  }
  .cart-heading {
    font-size: 3.6rem;
    font-weight: 300;
    padding: 3.2rem 2.4rem 0;
    width: 100%;
  }

  .home-btn,
  .cart-button {
    padding: 1.2rem 2.4rem;
    font-family: "Roboto", "Sans-Serif";
    font-size: 2.4rem;
    border: none;
    color: #fff;
    background: #4263eb;
    cursor: pointer;
    :hover {
      background: #5c7cfa;
    }
  }
  .cart-button-container {
    display: flex;
    justify-content: space-around;
    gap: 2.4rem;
    width: 100%;
    button {
      cursor: pointer;
    }
  }
  .checkout-amount-container {
    width: 100%;
    display: flex;
    gap: 4.8rem;
    align-items: center;
    .actual {
      font-size: 2.4rem;
      font-weight: 400;
    }
  }
`;

function CartPage() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(Context);
  const [placeOrder, setPlaceOrder] = useState(false);

  function calculateAndReturnSum(setState) {
    let sum = 0;
    cart.forEach(
      (item) => (sum = sum + (item.price * 1 + 0) * (item.quantity * 1 + 0))
    );
    return sum;
  }
  const [snack, setSnack] = useState(false);
  let i = 0;

  return (
    <>
      {cart.length > 0 ? (
        <Div>
          <span className="cart-heading">Have A Look at your Cart</span>
          <div className="products">
            {cart.map((item) => (
              <CartProduct
                product={item}
                key={i++}
                calculateAndReturnSum={calculateAndReturnSum}
                setSnack={setSnack}
              />
            ))}
          </div>
          <div className="checkout-amount-container">
            <span className="actual">
              Total Cost: Rs.{calculateAndReturnSum()}
            </span>
          </div>
          <div className="cart-button-container">
            <Button
              className="cart-button checkout"
              onClick={() => {
                console.log("order placed");
                setPlaceOrder(true);
              }}
            >
              Checkout
            </Button>
            <Button
              className="cart-button checkout"
              onClick={() => navigate("/shop")}
            >
              Shop Further
            </Button>
          </div>
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
              Item Removed From Your Cart
            </Alert>
          </Snackbar>

          <Backdrop
            open={placeOrder}
            onClick={() => {
              setPlaceOrder(false);
              setCart([]);
              navigate("/shop");
            }}
          >
            <Box
              sx={{
                background: "rgba(256, 256,256,.6)",
                padding: "2.4rem 4.8rem",
                borderRadius: "9px",
                boxShadow: "0 0 2px 5px rgba(256,256,256,.8)",
              }}
            >
              <Alert
                onClose={() => setPlaceOrder(false)}
                sx={{ fontSize: "1.8rem" }}
                severity="success"
              >
                <AlertTitle sx={{ fontSize: "2rem" }}>
                  Order Successfully Placed
                </AlertTitle>
                You will recieve the delivery asap
              </Alert>
              <Typography
                variant="h3"
                component="p"
                sx={{
                  color: "#364fc7",
                  fontWeight: 700,
                  marginTop: "1.8rem",
                }}
              >
                Thanks for Shopping with Shopperzz
              </Typography>
            </Box>
          </Backdrop>
        </Div>
      ) : (
        <Div>
          <h1>Cart Is Empty</h1>
          <button className="home-btn" onClick={() => navigate("/shop")}>
            Go To Home Page
          </button>
        </Div>
      )}
    </>
  );
}

export default CartPage;
