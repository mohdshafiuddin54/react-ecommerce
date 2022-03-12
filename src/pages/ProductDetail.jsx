import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Context from "../context";
import styled from "styled-components";
import ProductImage from "../components/ProductImage";
import ProductTitle from "../components/ProductTitle";
import PriceBox from "../components/PriceBox";
import SizesBox from "../components/SizesBox";
import ProductDescription from "../components/ProductDescription";
import BuyOptions from "../components/BuyOptions";
import ProductSpecs from "../components/ProductSpec";

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.2rem;
  padding: 2.4rem 3.6rem;
  .product-details {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
  }
  background: #fae7e7;
  color: #212529;
`;
function ProductDetail() {
  const { findAndSetActiveProduct, activeProduct } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    if (!activeProduct) findAndSetActiveProduct(params.id);
  });
  const navigate = useNavigate();
  const [specWidth, setSpecWidth] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentSize, setCurrentSize] = useState(0);
  return (
    <>
      {activeProduct ? (
        <Div>
          <div className="product-image">
            <ProductImage />
          </div>
          <div className="product-details">
            <ProductTitle />
            <PriceBox />
            <SizesBox
              currentSize={currentSize}
              setCurrentSize={setCurrentSize}
            />
            <ProductDescription />
            <BuyOptions
              quantity={quantity}
              setQuantity={setQuantity}
              navigate={navigate}
            />
            <ProductSpecs specWidth={specWidth} setSpecWidth={setSpecWidth} />
          </div>
        </Div>
      ) : null}
    </>
  );
}

export default ProductDetail;
