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
function Variants() {
  const { activeProduct, setCart } = useContext(Context);
  const products = activeProduct.variation;
  console.log({ products });
  console.log({ activeProduct });
  return (
    <>
      <Div>
        {products ? (
          <ProductListUtil products={products} />
        ) : (
          <h1>Loading Data.....</h1>
        )}
      </Div>
    </>
  );
}

function ProductListUtil({ products }) {
  let i = 0;
  const { setCart } = useContext(Context);
  return (
    <>
      {Object.keys(products).map((item) => (
        <Card
          key={i++}
          product={products[item]}
          setCart={setCart}
          name={products[item].name}
          price={products[item].price}
          image={products[item].image}
        />
      ))}
    </>
  );
}

export default Variants;
