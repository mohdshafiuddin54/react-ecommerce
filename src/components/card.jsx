import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import Context from "../context";

const Div = styled.div`
  max-width: 24rem;
  cursor: pointer;
  .product-img {
    width: 24rem;
  }
  span {
    display: block;
  }
  .image-container {
    :hover {
      .hover-menu {
        display: flex;
      }
    }
    position: relative;
  }
  .hover-menu {
    position: absolute;
    transition: all 0.5s;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(248, 249, 249, 0.5);
    display: flex;
    gap: 1.6rem;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding-bottom: 3.2rem;
    display: none;

    button {
      font-weight: 700;
      background: rgba(248, 249, 249, 0.7);
      opacity: 1;
      font-size: 1.4rem;
      color: #ff6b6b;
      padding: 0.6rem 2.4rem;
      font-family: "Fira Code", "monospace";
    }
  }
  .product-name {
    font-size: 1.4rem;
    line-height: 1.8rem;
    overflow-wrap: break-word;
    margin-bottom: 0.6rem;
    font-weight: 300;
  }
  .product-price {
    font-size: 1.4rem;
  }
`;

function Card({ product }) {
  const { setCart, setActiveProduct } = useContext(Context);
  const navigate = useNavigate();
  const { name, price, image } = product;
  return (
    <Div
      onClick={(e) => {
        if (e.target.classList.contains("ignore")) return;
        console.log("inner text", e.target.innerText);
        setActiveProduct(product);
        navigate("/product");
      }}
    >
      <div className="product">
        <div className="image-container">
          <img src={image} alt="" className="product-img" />
          <div className="hover-menu">
            <Button variant="contained">View Details</Button>
            <Button
              variant="contained"
              className="ignore"
              onClick={() => {
                setCart((val) => [...val, product]);
              }}
            >
              Add To Cart
            </Button>
          </div>
        </div>
        <div className="product-details">
          <span className="product-name">{name}</span>
          <span className="product-price">Rs.{price}</span>
        </div>
      </div>
    </Div>
  );
}

export default Card;
