import React, { useContext } from "react";
import { Pagination } from "@mui/material";
import styled from "styled-components";
import config from "../config.json";

const SdPagination = styled(Pagination)`
  margin: 4.8rem 0;
  ul {
    gap: 1.2rem;
  }
  li > button:hover {
    background: #4263eb;
    color: #fff;
  }
  li > button {
    background: #bac8ff;
    font-size: 1.6rem;
    font-weight: 700;
    font-family: "Fira Code", "monospace";
  }
  li > button.Mui-selected {
    background: #5c7cfa;
    color: #fff;
    :hover {
      background: #4263eb;
    }
  }
  .MuiPaginationItem-previousNext svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

function Paginations(props) {
  const { pageNum, setPageNum, data } = props;
  return (
    <div
      className="pagination-wrapper"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <SdPagination
        variant="outlined"
        shape="rounded"
        count={Math.floor(data.length / process.env.REACT_APP_PAGINATION_VALUE)}
        page={pageNum * 1}
        size="large"
        onChange={(e) => setPageNum(e.target.innerText)}
      />
    </div>
  );
}

export default Paginations;
