import React from "react";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import NavCategory from "./NavCategory";
import NavCart from "./NavIcon";
import { NavUser } from "./NavIcon";

const Div = styled.div`
  color: #fff;
  margin-bottom: 1.8rem;
  .logo {
    font-size: 3.2rem;
    letter-spacing: 2px;
  }
  font-weight: 700;
  .main-nav-bar {
    display: flex;
    justify-content: space-between;
  }
`;

const SdToolbar = styled(Toolbar)`
  && {
    background-color: #ffc9c9;
    min-height: 48px;
    max-height: 48px;
    display: flex;
    // justify-content: space-around;
    align-items: center;
    gap: 1.8rem;
    position: relative;
  }
  .nav-icons-container {
    display: flex;
    align-items: center;
  }
  .nav-category-container {
    display: flex;
    gap: 1.6rem;
    z-index: 1000;
  }
`;
function NavBar() {
  return (
    <Div>
      <Toolbar style={{ backgroundColor: "#ff6b6b" }} className="main-nav-bar">
        <span className="logo">Shopperzz</span>
        <div
          className="nav-icons-container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <NavCart />
          <NavUser />
        </div>
      </Toolbar>

      {/* <SdToolbar className="sd">
        <div className="nav-category-container">
          <NavCategory catId={1} />
          <NavCategory catId={2} />
          <NavCategory catId={3} />
          <NavCategory catId={4} />
        </div>
      </SdToolbar> */}
    </Div>
  );
}

export default NavBar;
