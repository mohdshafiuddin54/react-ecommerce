import React from "react";
import { useContext } from "react";
import Context from "../context";
import styled from "styled-components";

const Div = styled.div`
  span {
    font-size: 3.6rem;
    font-weight: 300;
    line-height: 0.85;
    letter-spacing: 2px;
  }
`;

function ProductTitle() {
  const { activeProduct } = useContext(Context);
  return (
    <Div className="name-box">
      <span>{activeProduct.name}</span>
    </Div>
  );
}

export default ProductTitle;
