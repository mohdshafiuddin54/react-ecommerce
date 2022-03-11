import React, { useRef } from "react";
import styled from "styled-components";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Div = styled.div`
  background-color: #ff6b6b;
  color: #fff;
  border-radius: 9px;
  position: relative;
  span {
    font-weight: 400;
    font-size: 1.6rem;
    padding: 0.4rem 1.2rem;
    display: flex;
    gap: 0.8rem;
    cursor: pointer;
    align-items: center;
  }
  .nav-body,
  .top {
    width: 12rem;
  }
  section {
    display: none;
  }
`;
function NavCategory({ catId }) {
  const active = useRef();
  const handleHover = (state) => {
    if ((state = "on")) active.current.classList.add("active");
    else active.current.classList.remove("active");
  };
  return (
    <Div catId={catId}>
      <div className="wrapper">
        <div className="top" ref={active} onMouseOver={() => handleHover("on")}>
          <span>Category{<KeyboardDoubleArrowDownIcon />}</span>
        </div>
        <section className={`nav-body ${catId}-nav`}>
          <span>SubCat-1</span>
          <span>SubCat-1</span>
          <span>SubCat-1</span>
          <span>SubCat-1</span>
        </section>
      </div>
    </Div>
  );
}

export default NavCategory;
