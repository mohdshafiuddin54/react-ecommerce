import { Button } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../context";

const Div = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 2.4rem;
    gap: 2.4rem;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    div {
      display: flex;
      align-items: center;
    }
  }
  .image-container {
    .main-image {
      width: 35vw;
    }
  }
  .name-box {
    span {
      font-size: 3.2rem;
    }
    font-weight: 300;
  }
  .prices-box {
    gap: 2.4rem;
  }
  .prices-box {
    span {
      font-size: 2.4rem;
    }
    .original {
      text-decoration: line-through;
      color: gray;
    }
    .discount {
      font-size: 1.8rem;
      margin-left: -12px;
      color: red;
    }
  }
  .sizes-box {
    gap: 0.8rem;
    font-size: 1.6rem;
  }
  .sizes-box .size {
    display: block;
    padding: 0.4rem 0.8rem;
    font-size: 1.6rem;
    border: 0.1px solid black;
  }
  .quantity {
    font-size: 1.8rem;
    display: flex;
    gap: 0.8rem;
    margin-right: 3.2rem;
  }
  .quantity button {
    font-family: "Fira Code", "monospace";
    padding: 0.6rem 0.8rem;
    font-weight: 700;
    font-size: 1.6rem;
  }
  .buy-button {
    font-size: 2.4rem;
    font-weight: 700;
    background: red;
    font-family: "Fira Code", "monospace";
  }

  .description-box {
    flex-direction: column;
    align-items: start !important;
    gap: 1.2rem;
    .description-heading {
      font-size: 2.4rem;
    }
    span {
      font-size: 1.8rem;
    }
  }
`;

function ProductPage() {
  const { activeProduct } = useContext(Context);
  console.log(activeProduct);

  const sizes = activeProduct?.size.split(",").map((item) => item.slice(1, -1));
  const extraDetails = [
    "length",
    "material",
    "category",
    "neck",
    "occassion",
    "fit",
    "color",
  ];
  return (
    <Div>
      {activeProduct ? (
        <div className="container">
          <div className="image-container">
            <img className="main-image" src={activeProduct.image} />
          </div>
          <div className="product-data">
            <div className="name-box">
              <span>{activeProduct.name}</span>
            </div>
            <div className="prices-box">
              <span className="original">Rs.{activeProduct.price}</span>
              <span className="actual">Rs.{activeProduct.selling_price}</span>
              <span className="discount">(-{activeProduct.discount}%)</span>
            </div>
            <div className="sizes-box">
              Available Sizes:
              {sizes.map((item) => (
                <span className="size">{item}</span>
              ))}
            </div>
            <div className="buy-buttons">
              <div className="quantity">
                <button>-</button>4 <button>+</button>
              </div>
              <Button
                className="buy-button"
                variant="contained"
                style={{ marginRight: "24px" }}
              >
                Add To Cart
              </Button>
              <Button className="buy-button" variant="contained">
                Buy Now
              </Button>
            </div>
            <div className="description-box">
              <span className="description-heading">Know The Product</span>
              <span>{activeProduct.description}</span>
            </div>
            <div className="extra-details"></div>
          </div>
        </div>
      ) : null}
    </Div>
  );
}

export default ProductPage;
