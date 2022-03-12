import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import styled from "styled-components";
import Context from "../context";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  background: #fff3f3;
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
    background: #fff3f3;
    font-size: 3.6rem;
    font-weight: 300;
    padding: 3.2rem 2.4rem 0;
    width: 100%;
  }

  .home-btn,
  .cart-button {
    padding: 1.2rem 2.4rem;
    font-family: "Fira Code", "monospace";
    font-size: 2.4rem;
    border: none;
    background: #ff6b6b;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
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
  const [totalCost, setTotalCost] = useState(calculateAndReturnSum);

  function calculateAndReturnSum(setState) {
    let sum = 0;
    cart.forEach(
      (item) => (sum = sum + (item.price * 1 + 0) * (item.quantity * 1 + 0))
    );
    if (setState) return setTotalCost(sum);
    return sum;
  }
  return (
    <>
      {cart.length > 0 ? (
        <Div>
          <span className="cart-heading">Have A Look at your Cart</span>
          <div className="products">
            {/* <CartProduct />
            <CartProduct />
        <CartProduct /> */}
            {cart.map((item) => (
              <CartProduct
                product={item}
                calculateAndReturnSum={calculateAndReturnSum}
              />
            ))}
          </div>
          <div className="checkout-amount-container">
            <span className="actual">Total Cost: Rs.{totalCost}</span>
          </div>
          <div className="cart-button-container">
            <button className="cart-button checkout">Checkout</button>
            <button className="cart-button checkout" onClick={navigate("/")}>
              Shop Further
            </button>
          </div>
        </Div>
      ) : (
        <Div>
          <h1>Cart Is Empty</h1>
          <button className="home-btn" onClick={() => navigate("/")}>
            Go To Home Page
          </button>
        </Div>
      )}
    </>
  );
}

export default CartPage;
