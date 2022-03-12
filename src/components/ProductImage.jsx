import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../context";

const Div = styled.div`
  .main-image {
    width: 35vw;
  }
`;
function ProductImage() {
  const { activeProduct } = useContext(Context);
  return (
    <Div className="image-container">
      <img className="main-image" src={activeProduct.image} />
    </Div>
  );
}

export default ProductImage;
