import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { Badge } from "@mui/material";
import { Notifications, ShoppingCart } from "@mui/icons-material";
import styled from "styled-components";
import Context from "../context";
import { AccountCircle } from "@mui/icons-material";

const SdBadge = styled(Badge)`
  .MuiBadge-badge {
    background: #343a40;
    font-weight: 700;
    font-size: 1rem;
  }
`;
function NavCart() {
  const { cart } = useContext(Context);
  return (
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <SdBadge badgeContent={`${cart.length}`}>
        <ShoppingCart sx={{ width: "32px", height: "32px", color: "#fff" }} />
      </SdBadge>
    </IconButton>
  );
}

function NavUser() {
  return (
    <>
      <AccountCircle sx={{ width: "32px", height: "32px", color: "#fff" }} />
    </>
  );
}

export { NavUser };

export default NavCart;
