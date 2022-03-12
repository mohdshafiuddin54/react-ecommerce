import React, { useContext, useRef } from "react";
import styled from "styled-components";
import Context from "../context";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
const Div = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  justify-items: start;
  justify-content: start;
  font-size: 1.8rem;
  .spec-item {
    display: flex;
    gap: 2.4rem;
    margin-bottom: ;
  }
  .specs-heading {
    grid-column: 1 / span 3;
    margin-bottom: 1.2rem;
  }
  .drag {
    grid-column: 2;
    padding: 2.4rem 2.4rem;
    background: #fff;
  }
  .contents {
    display: contents;
    padding: 1.2rem 1.8rem;
    background: red;
  }
  .title,
  .value,
  .colon,
  .drag {
    padding: 0.6rem 0.8rem;
  }
`;
function ProductSpec({ specName, specValue, showSpecs = false }) {
  let i = 0;
  const { activeProduct } = useContext(Context);
  let extraDetails = [
    "length",
    "material",
    "category",
    "neck",
    "occassion",
    "fit",
    "color",
  ];

  return (
    <>
      <Div showSpecs={showSpecs}>
        <span
          className="specs-heading"
          style={{ fontSize: "2.8rem", fontWeight: "700", marginTop: "1.6rem" }}
        >
          Specifications
        </span>
        {extraDetails.map((item) =>
          activeProduct[item] ? (
            <div className="contents" key={i++}>
              <span className="title">{item}</span>
              <span className="colon">:</span>
              <span className="value">{activeProduct[item]}</span>
            </div>
          ) : null
        )}
      </Div>
    </>
  );
}

export default ProductSpec;
