import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import Context from "../context";
import {
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import styled from "styled-components";

const Div = styled.div`
  .card {
    max-width: 240px;
    cursor: pointer;
  }
  .actual-price {
    text-decoration: line-through;
  }
  .box {
    margin-bottom: -10px;
  }
  button {
    background: #228be6;
  }
`;
function TestCard({ product, snack, setSnack }) {
  const { cart, setCart, setActiveProduct } = useContext(Context);
  const addToCart = () => {
    if (cart.find((item) => item.id_product == product.id_product)) return;
    setCart((val) => [...val, { ...product, ["quantity"]: 1 }]);
    setSnack(true);
  };
  const { name, price, image } = product;
  const navigate = useNavigate();
  return (
    <Div>
      <Card
        className="card"
        onClick={(e) => {
          if (e.target.classList.contains("add-to-cart-btn")) return;
          if (!name) return;
          setActiveProduct(product);
          navigate(`/product2/${product.id_product}`);
        }}
      >
        <CardMedia
          component="img"
          alt="Product Image"
          className="card-media"
          //   src="https://wforwoman.gumlet.io/product/21AUWS16774-216408/300/21AUWS16774-216408.jpg"
          src={image}
        />
        <CardContent>
          {name && (
            <Typography
              variant="h5"
              component="p"
              sx={{ marginTop: "-8px", marginBottom: "8px" }}
            >
              {/* Orange Pleated Kurta-Slim Pants Set */}
              {name}
            </Typography>
          )}
          <Box sx={{ display: "flex", gap: "1.2rem" }} className="box">
            <Typography variant="h5" component="span" className="actual-price">
              Rs {price}
            </Typography>
            <Typography
              variant="h5"
              component="span"
              sx={{ marginBottom: "-8px", fontWeight: 700 }}
            >
              Rs {price}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{ fontSize: 12, fontWeight: 700 }}
            variant="contained"
            fullWidth
            size="24px"
            className="add-to-cart-btn"
            onClick={() => addToCart()}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Div>
  );
}

export default TestCard;
