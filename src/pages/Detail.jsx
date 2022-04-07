import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { TableCell, TableContainer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SizesBox from "../components/sizesBox";
import Context from "../contexts/context";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Card from "../components/Card";
import { Button } from "@mui/material";
import Counter from "../components/Counter";
import config from "../config.json";
import fetchData from "../util/fetchData";

const Div = styled.div`
  background: #edf2ff;

  padding: 2.4rem 3.2rem;
  .box {
    img {
      width: 100%;
    }
  }
  .actual-price {
    text-decoration: line-through;
    color: #868e96;
    letter-spacing: 0.7px;
  }
  .selling-price {
    color: #4263eb;
  }
  .detail-box {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
  }

  .price-box {
    display: flex;
    gap: 2.8rem;
    align-items: end;
    div {
      display: flex;
      gap: 0.8rem;
      align-items: end;
    }
  }

  .description-heading {
    margin-bottom: 0.8rem;
  }
  .table-container {
    width: 30rem;
    text-transform: capitalize;
  }
  .accordion-summary {
    background: #dee2e6;
    svg {
      width: 3.2rem;
      height: 3.24rem;
    }
  }
  .buy-buttons-box {
    display: flex;
    justify-content: start;
    gap: 2.4rem;
    button {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
  .paper {
    margin-top: 2.4rem;
    background: #edf2ff;
  }
`;
function Detail() {
  const { cart, setCart } = useContext(Context);
  const [searchParams] = useSearchParams();
  const [activeProduct, setActiveProduct] = useState(null);
  const [currentSize, setCurrentSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const category = searchParams.get("category") || "top-wear-kurtas";
  const id = searchParams.get("id");

  useEffect(() => {
    (async () => {
      let tempData = await fetchData(category);
      setActiveProduct(tempData.find((item) => item.id_product == id));
    })();
  }, [searchParams]);

  const addToCart = () => {
    if (!cart.find((item) => item.id_product == activeProduct.id_product)) {
      setCart((val) => [...val, { ...activeProduct, ["quantity"]: quantity }]);
    }
  };

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
    <Div>
      {activeProduct && (
        <>
          <Grid container spacing={5}>
            <Grid item md={4}>
              <Box className="box">
                <img src={activeProduct.image} alt="" />
              </Box>
            </Grid>
            <Grid item md={8} className="detail-box">
              <Typography variant="h2" element="div">
                {/* Light Blue Hand Block Print Flared Kurta */}
                {activeProduct.name}
              </Typography>
              <Box className="price-box">
                <Box className="actual-price-box">
                  <Typography variant="h5" component="p">
                    M.R.P
                  </Typography>
                  <Typography
                    variant="h4"
                    component="p"
                    className="actual-price"
                  >
                    ₹ {activeProduct.price}
                  </Typography>
                </Box>
                <Box className="selling-price-box">
                  <Typography variant="h4" component="p">
                    Offered
                  </Typography>
                  <Typography
                    variant="h3"
                    component="p"
                    className="selling-price"
                  >
                    ₹ {activeProduct.selling_price}
                  </Typography>
                </Box>
                <Box className="discount-box">
                  <Typography variant="h5" component="p">
                    Discount
                  </Typography>
                  <Typography variant="h4" component="p" className="discount">
                    {activeProduct.discount}%
                  </Typography>
                </Box>
              </Box>
              <SizesBox
                currentSize={currentSize}
                setCurrentSize={setCurrentSize}
                activeProduct={activeProduct}
              />
              <Box className="buy-buttons-box">
                <Counter value={quantity} setQuantity={setQuantity} />
                <Button
                  onClick={() => {
                    addToCart();
                    navigate("/cart");
                  }}
                  variant="contained"
                  size="medium"
                >
                  Buy Now
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={() => addToCart()}
                >
                  Add To Cart
                </Button>
              </Box>
              <Box className="description-box">
                <Typography
                  variant="h3"
                  component="div"
                  className="description-heading"
                >
                  Know The Product
                </Typography>
                <Typography variant="h4" component="p" className="description">
                  {activeProduct.description}
                </Typography>
              </Box>
              <Accordion>
                <AccordionSummary
                  className="accordion-summary"
                  expandIcon={<ExpandMore />}
                >
                  <Typography variant="h3" component="p">
                    Specifications
                  </Typography>
                </AccordionSummary>
                <TableContainer component={Box} className="table-container">
                  <Table className="table" aria-label="simple table">
                    <TableBody>
                      {extraDetails.map((item) =>
                        activeProduct[item] ? (
                          <TableRow key={item}>
                            <TableCell component="th" scope="row">
                              <Typography variant="h5" component="p">
                                {item}
                              </Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                              <Typography variant="h5" component="p">
                                :
                              </Typography>
                            </TableCell>
                            <TableCell component="th" scope="row">
                              <Typography
                                variant="h5"
                                component="p"
                                align="left"
                              >
                                {activeProduct[item]}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ) : null
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Accordion>
            </Grid>
          </Grid>

          <Box className="paper">
            <Typography variant="h3" component="p">
              Similar Products
            </Typography>
            <Box
              sx={{
                marginTop: "1.6rem",
                display: "flex",
                gap: "2.4rem",
                flexWrap: "wrap",
              }}
            >
              {activeProduct
                ? Object.keys(activeProduct.variation).map((item) => (
                    <Card
                      category={category}
                      key={item}
                      product={activeProduct.variation[item]}
                    />
                  ))
                : null}
            </Box>
          </Box>
        </>
      )}
    </Div>
  );
}

export default Detail;
