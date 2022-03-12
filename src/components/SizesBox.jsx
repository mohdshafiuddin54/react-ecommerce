import React from "react";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import Context from "../context";

const Div = styled.div`
  &.sizes-box {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.6rem;
  }
  &.sizes-box .size {
    display: block;
    padding: 0.4rem 1rem;
    font-size: 1.6rem;
    border: 0.1px solid black;
    border-radius: 2px;
    cursor: pointer;
  }
  .active {
    background: #ff6b6b;
    color: #fff;
    font-weight: 700;
  }
`;

function ProductSizes({ currentSize, setCurrentSize }) {
  let i = 0;
  const { activeProduct } = useContext(Context);
  const sizes = activeProduct?.size.split(",").map((item) => item.slice(1, -1));
  useEffect(() => {
    if (!currentSize) setCurrentSize(sizes[0]);
  });
  console.log({ currentSize });
  const handleClick = (e) => setCurrentSize(e.target.innerText);
  return (
    <Div className="sizes-box">
      Available Sizes:
      {sizes.map((item) => (
        <span
          key={i++}
          onClick={handleClick}
          className={`size ${currentSize == item ? "active" : null}`}
        >
          {item}
        </span>
      ))}
    </Div>
  );
}

export default ProductSizes;
