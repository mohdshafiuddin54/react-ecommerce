import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/system";

const Div = styled.div`
  .stack {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
  }
  .avatar {
    width: 8rem;
    height: 8rem;
  }
`;

function Category({ src, name }) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Avatar className="avatar" src={src} />
      <Typography variant="h3" component="p">
        {name}
      </Typography>
    </Box>
  );
}
function LandCategories() {
  return (
    <Div>
      <Stack
        className="stack"
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Category name="Churidars" src="/landImages/churidar.jpg" />
        <Category name="Kurtas" src="/landImages/kurta.jpg" />
        <Category name="Palazzos" src="/landImages/palazzo.jpg" />
        <Category name="Tops" src="/landImages/top.jpg" />
        <Category name="FootWear" src="/landImages/footwear.jpg" />
        <Category name="Cosmetics" src="/landImages/cosmetics.jpg" />
      </Stack>
    </Div>
  );
}
export default LandCategories;
