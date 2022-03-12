import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import Context from "../context";

const Div = styled.div`
  &.description-box {
    display: flex;
    flex-direction: column;
    align-items: start !important;
    gap: 1.2rem;
    .description-heading {
      font-size: 2.8rem;
      font-weight: 700;
    }
    span {
      font-size: 1.8rem;
    }
  }
`;
function ProductDescription() {
  const { activeProduct } = useContext(Context);
  return (
    <Div className="description-box">
      <span className="description-heading">Know The Product</span>
      <span>{activeProduct.description}</span>
    </Div>
  );
}

export default ProductDescription;
