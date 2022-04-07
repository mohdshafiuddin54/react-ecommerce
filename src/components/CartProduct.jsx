import React, { useContext, useState } from "react";
import Context from "../contexts/context";
import styled from "styled-components";
import Counter from "./Counter";
import Button from "@mui/material/Button";

const Div = styled.div`
  display: flex;
  gap: 2.8rem;
  color: #212529;
  padding: 1.2rem 2.4rem;
  background: #dbe4ff;
  .cart-price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    span {
      font-size: 1.8rem;
    }
  }
  img {
    height: 22rem;
  }
  .cart-counter {
    display: flex;
    align-items: center;
    gap: 1.8rem;
  }
  .home-btn,
  .remove-btn {
    font-family: "Roboto", "Sans-Serif";
    background: #4263eb;
    color: #fff;
    cursor: pointer;
    font-size: 1.8rem;
    :hover {
      background: #5c7cfa;
    }
  }
  .remove-btn-container {
    display: flex;
    align-items: center;
  }
`;
function CartProduct({ product, calculateAndReturnSum, setSnack }) {
  const { cart, setCart } = useContext(Context);
  const [quantity, setQuantity] = useState(
    product.quantity == 0 ? 1 : product.quantity
  );
  function setAndUpdateQuantity(action) {
    const newcart = cart.map((item) =>
      item.id_product == product.id_product
        ? { ...item, ["quantity"]: item["quantity"] + 1 }
        : item
    );
    setCart(newcart);
  }
  return (
    <Div>
      <div className="image-container">
        <img src={product.image} alt="" />
      </div>
      <div className="cart-price">
        <span>Price:{product.price}</span>
        <span className="cart-counter">
          Quantity:
          <Counter
            value={product.quantity}
            setAndUpdateQuantity={setAndUpdateQuantity}
          />
        </span>
        <span>Amount:{product.price * product.quantity}</span>
      </div>
      <div className="remove-btn-container">
        <Button
          size="large"
          className="remove-btn"
          onClick={() => {
            setSnack(true);
            setCart((val) => val.filter((item) => item != product));
          }}
        >
          Remove
        </Button>
      </div>
    </Div>
  );
}

export default CartProduct;
