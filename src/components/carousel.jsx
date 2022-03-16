import React, { useEffect, useRef, useState } from "react";
import { Button, Fade, IconButton } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/material";
import {
  KeyboardArrowRightSharp,
  KeyboardArrowLeftSharp,
} from "@mui/icons-material";

const Div = styled.div`
  .item {
    position: absolute;
    border-radius: 9px;
  }
  display: flex;
  justify-content: center;
  width: 55vw;
  height: 31vw;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  .arrow-box {
    position: absolute;
    top: 50%;
    z-index: 1000;

    :hover {
      svg {
        color: #343a40;
      }
    }

    svg {
      width: 5rem;
      height: 5rem;
      color: #868e96;
    }
  }
  .left {
    left: 0;
    transform: translate(0%, -50%);
  }
  .right {
    right: 0;
    transform: translate(0%, -50%);
  }
`;

function Carousel() {
  let interval;
  const [show, setShow] = useState(1);
  const [interv, setInterv] = useState(null);
  console.log({ show, interv });
  const kickoff = () => {
    setInterv(
      setInterval(() => setShow((val) => (val < 4 ? val + 1 : 1)), 3000)
    );
  };
  const rewind = () => {
    clearInterval(interv);
    setShow((val) => (val > 1 ? val - 1 : 4));
    kickoff();
  };
  const forward = () => {
    clearInterval(interv);
    setShow((val) => (val < 4 ? val + 1 : 1));
    kickoff();
  };
  useEffect(kickoff, []);

  return (
    <>
      <Div>
        <IconButton className="arrow-box right" onClick={forward}>
          <KeyboardArrowRightSharp />
        </IconButton>
        <IconButton className="arrow-box left" onClick={rewind}>
          <KeyboardArrowLeftSharp />
        </IconButton>
        <Fade in={show == 1} className="item" timeout={500}>
          <Box className="item">
            <img src="/images/1.jpg" alt="" />
          </Box>
        </Fade>
        <Fade in={show == 2} className="item" timeout={500}>
          <Box className="item">
            <img src="/images/2.jpg" alt="" />
          </Box>
        </Fade>
        <Fade in={show == 3} className="item" timeout={500}>
          <Box className="item">
            <img src="/images/3.jpg" alt="" />
          </Box>
        </Fade>
        <Fade in={show == 4} className="item" timeout={500}>
          <Box className="item">
            <img src="/images/4.jpg" alt="" />
          </Box>
        </Fade>
      </Div>
    </>
  );
}

export default Carousel;
