import React, { useContext } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import Context from "../context";

const Div = styled.div`
  display: flex;
  align-items: center;
  & .buy-button {
    font-size: 2.4rem;
    font-weight: 700;
    background: #fa5252;
    cursor: pointer;
    font-family: "Fira Code", "monospace";
    border: none;
    color: #fff;
    padding: 1.2rem 1.8rem;
  }
`;

function BuyOptions({ quantity, setQuantity, navigate }) {
  const { cart, setCart, activeProduct } = useContext(Context);
  const addToCart = () => {
    if (!cart.includes(activeProduct)) {
      setCart((val) => [...val, { ...activeProduct, ["quantity"]: quantity }]);
    }
  };
  return (
    <Div className="buy-buttons">
      <Counter value={quantity} setQuantity={setQuantity} />
      <button
        className="buy-button"
        onClick={() => addToCart()}
        style={{ marginRight: "24px" }}
      >
        Add To Cart
      </button>
      <button
        className="buy-button"
        onClick={() => {
          addToCart();
          navigate("/cart");
        }}
      >
        Buy Now
      </button>
    </Div>
  );
}

export default BuyOptions;
