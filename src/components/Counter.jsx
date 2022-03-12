import React from "react";
import styled from "styled-components";

const Div = styled.div`
  &.quantity {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-right: 3.2rem;
  }
  &.quantity button {
    font-family: "Fira Code", "monospace";
    padding: 0.6rem 0.8rem;
    font-weight: 700;
    font-size: 1.6rem;
    border: 0.2px solid black;
    border-radius: 2px;
    cursor: pointer;
  }
`;
function Counter({ value, setQuantity, setAndUpdateQuantity }) {
  return (
    <Div className="quantity">
      <button
        onClick={() =>
          setAndUpdateQuantity
            ? setAndUpdateQuantity("minus")
            : setQuantity((val) => (val > 1 ? val - 1 : val))
        }
      >
        -
      </button>
      {value}
      <button
        onClick={() =>
          setAndUpdateQuantity
            ? setAndUpdateQuantity("add")
            : setQuantity((val) => val + 1)
        }
      >
        +
      </button>
    </Div>
  );
}

export default Counter;
