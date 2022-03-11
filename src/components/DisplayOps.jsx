import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 2.4rem;
  margin-right: 2.4rem;
  button {
    font-family: "Fira Code", "monospace";
  }
  div {
    border: 1px solid black;
    :first-child {
      border-right: none;
      border-radius: 7px 0 0 7px;
    }
    :last-child {
      border-radius: 0 7px 7px 0;
    }
    padding: 0.8rem 2.8rem;
    font-size: 2.4rem;
    border-radius: 9px;
  }
`;

function DisplayOps() {
  return (
    <Div>
      <div className="grid">Grid</div>
      <div className="list">List</div>
    </Div>
  );
}

export default DisplayOps;
