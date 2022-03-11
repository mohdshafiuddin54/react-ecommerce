import React, { useContext } from "react";
import Card from "../components/card";
import styled from "styled-components";
import Context from "../context";
import DisplayOps from "../components/DisplayOps";
import Pagination from "../components/Paginations.jsx";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.4rem 0;
  padding: 0 2.4rem;
  justify-items: center;
`;
function ProductList() {
  const { paginatedData: data, setCart } = useContext(Context);
  let products = data ? data : null;
  return (
    <>
      {/* <DisplayOps /> */}
      <Div>
        {products ? (
          <ProductListUtil products={products} />
        ) : (
          <h1>Loading Data.....</h1>
        )}
      </Div>
      {products ? <Pagination /> : null}
    </>
  );
}

function ProductListUtil({ products }) {
  let i = 0;
  const { paginatedData: data, setCart } = useContext(Context);
  return (
    <>
      {products.map((item) => (
        <Card
          key={i++}
          product={item}
          setCart={setCart}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </>
  );
}

export default ProductList;
