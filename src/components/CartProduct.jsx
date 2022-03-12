import React, { useContext, useState } from "react";
import Context from "../context";
import styled from "styled-components";
import Counter from "./Counter";

const Div = styled.div`
  display: flex;
  gap: 2.8rem;
  color: #212529;
  padding: 1.2rem 2.4rem;
  background: #fae7e7;
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
    font-family: "Fira Code", "monospace";
    border: none;
    padding: 1.2rem 2.4rem;
    font-size: 2.4rem;
    font-weight: 700;
    background: #ff6b6b;
    color: #fff;
    cursor: pointer;
  }
  .remove-btn-container {
    display: flex;
    align-items: center;
  }
`;
function CartProduct({ product, calculateAndReturnSum }) {
  const { setCart } = useContext(Context);
  const [quantity, setQuantity] = useState(
    product.quantity == 0 ? 1 : product.quantity
  );
  console.log(product);
  function setAndUpdateQuantity(action) {
    if (action == "add") {
      product["quantity"] = product["quantity"] + 1;
      setQuantity((val) => val + 1);
    } else {
      product["quantity"] = product["quantity"] - 1;
      setQuantity((val) => val - 1);
    }
    calculateAndReturnSum(true);
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
            value={quantity}
            setAndUpdateQuantity={setAndUpdateQuantity}
          />
        </span>
        <span>Amount:{product.price * quantity}</span>
      </div>
      <div className="remove-btn-container">
        <button
          className="remove-btn"
          onClick={() =>
            setCart((val) => val.filter((item) => item != product))
          }
        >
          Remove
        </button>
      </div>
    </Div>
  );
}

export default CartProduct;
