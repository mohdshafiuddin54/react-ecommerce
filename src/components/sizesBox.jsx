import React, { useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Context from "../context";

const Div = styled.div`
  .single-size {
    padding: 1.2rem 1.8rem;
    background: #d0ebff;
    font-size: 1.8rem;
    border: 0.5px solid;
    font-weight: 700;
    border-radius: 5px;
  }
  .sizes-box {
    display: flex;
    gap: 1.8rem;
    margin-top: 1.2rem;
  }
`;
function SingleBox({ size }) {
  return (
    <Div>
      <Box className="single-size">{size}</Box>
    </Div>
  );
}
function SizesBox({ currentSize, setCurrentSize }) {
  const { activeProduct } = useContext(Context);
  const sizes = activeProduct?.size.split(",").map((item) => item.slice(1, -1));
  useEffect(() => {
    if (!currentSize) setCurrentSize(sizes[0]);
  });
  const handleClick = (e) => setCurrentSize(e.target.innerText);
  // let sizes = ["X", "S", "XS", "L", "XL", "XXL"];
  return (
    <Div>
      <Typography variant="h4" component="div">
        Available Sizes:
      </Typography>
      <Box className="sizes-box">
        {sizes.map((item) => (
          <SingleBox size={item} />
        ))}
      </Box>
    </Div>
  );
}

export default SizesBox;
