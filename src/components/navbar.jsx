import React from "react";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import NavCategory from "./NavCategory";
import NavCart from "./NavIcon";
import { NavUser } from "./NavIcon";
import categories from "../categories.json";

const Div = styled.div`
  color: #fff;
  .logo {
    font-size: 3.2rem;
    letter-spacing: 2px;
    cursor: pointer;
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
    padding: 1.8rem 2.4rem;
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
  let i = 0;
  const navigate = useNavigate();
  return (
    <Div>
      <Toolbar style={{ backgroundColor: "#ff6b6b" }} className="main-nav-bar">
        <span className="logo" onClick={() => navigate("/")}>
          Shopperzz
        </span>
        <div
          className="nav-icons-container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <NavCart onClick={() => navigate("./cart")} />
          <NavUser />
        </div>
      </Toolbar>

      <SdToolbar className="sd">
        <div className="nav-category-container">
          {Object.keys(categories).map((item) => (
            <NavCategory key={i++} item={categories[item]} title={item} />
          ))}
        </div>
      </SdToolbar>
    </Div>
  );
}

export default NavBar;
