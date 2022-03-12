import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import Context from "../context";

const Div = styled.div`
  gap: 2.4rem;
  display: flex;
  align-items:center;
    span {
    }
    .original {
      text-decoration: line-through;
      color: gray;
      font-size:1.8rem;
    }
    .actual{
      font-size:2.4rem;
    }
    .discount {
      font-size: 1.6rem;
      margin-left: -12px;
      color: red;
    }
  }
`;

function PriceBox() {
  const { activeProduct } = useContext(Context);
  return (
    <Div>
      <span className="original">Rs.{activeProduct.price}</span>
      <span className="actual">Rs.{activeProduct.selling_price}</span>
      <span className="discount">(-{activeProduct.discount}%)</span>
    </Div>
  );
}

export default PriceBox;
