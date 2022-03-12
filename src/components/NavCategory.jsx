import React, { useEffect, useRef, useState, useContext } from "react";
import styled from "styled-components";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Context from "../context";

const Div = styled.div`
  background-color: #ff6b6b;
  color: #fff;
  position: relative;
  .top button {
    font-weight: 400;
    font-size: 1.6rem;
    padding: 0.4rem 1.2rem;
    display: flex;
    gap: 0.8rem;
    cursor: pointer;
    align-items: center;
    background: #ff6b6b;
    border: none;
  }
  :hover {
    section {
      display: flex;
    }
  }
  .nav-body,
  .top {
    // width: 12rem;
    justify-content: center;
  }
  .top {
    display: flex;
    justify-content: center;
    button {
      border-radius: 4px;
      font-family: "Fira Code", "monospace";
      color: #fff;
      font-weight: 700;
    }
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: start;
    position: absolute;
    width: ${(props) => (props.topWidth ? `${props.topWidth}px` : "12rem")};
    background-color: #ffc9c9;
    button {
      padding: 0.4rem 1.2rem;
      background: #ff6b6b;
      color: #fff;
      width: 100%;
      border: none;
      font-size: 1.6rem;
      font-weight: 700;
      font-family: "Fira Code", "monospace";
      cursor: pointer;
      :hover {
        background: #ffa8a8;
      }
      border-bottom: 0.1px solid #fff;
      :last-child {
        border-bottom: none;
      }
    }
  }
  section {
    display: none;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;
function NavCategory({ title, item }) {
  const [topWidth, setTopWidth] = useState(null);
  const ref = useRef();
  useEffect(() => setTopWidth(ref.current.offsetWidth), []);
  const { fetchData } = useContext(Context);
  let i = 0;
  return (
    <Div topWidth={topWidth}>
      <div className="top" ref={ref}>
        <button>
          {title} {<KeyboardDoubleArrowDownIcon />}
        </button>
      </div>
      <div className="wrapper">
        <section>
          {Object.keys(item).map((elem) => (
            <button key={i++} onClick={() => fetchData(item[elem])}>
              {elem}
            </button>
          ))}
        </section>
      </div>
    </Div>
  );
}

export default NavCategory;
