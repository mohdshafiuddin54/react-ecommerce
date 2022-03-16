import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/carousel";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Button } from "@mui/material";
import LandCategories from "../components/LandCategories";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4.8rem;
  font-family: "Roboto", "Sans-Serif";
  color: #212529;
  background: #dbe4ff;
  .h1 {
    font-weight: 300;
    font-size: 6rem;
    letter-spacing: 3px;
  }

  .h2 {
    // line-height: 2;
  }
  .title-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 4.8rem;
    width: 100%;
    height: 100%;

    button {
      font-weight: 700;
      font-size: 2.4rem;
    }
  }
`;

function Land() {
  const navigate = useNavigate();
  const [val, setVal] = useState(0);

  return (
    <div className="wrapper">
      <Div>
        <Box className="title-box">
          <Typography className="h1" variant="h1" component="h1">
            Shopperzz
          </Typography>
          <Typography variant="h2" className="h2" component="h2">
            The Ultimate Women's Shopping Destination
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/shop")}
          >
            Get Started
          </Button>
        </Box>
        <Carousel />
      </Div>
      <Box sx={{ background: "#dbe4ff", padding: "4.8rem" }}>
        <Typography variant="h2" component="p" sx={{ marginBottom: "3.2rem" }}>
          Top Categories
        </Typography>
        <LandCategories />
      </Box>
    </div>
  );
}

export default Land;
