import { Box, Container, styled } from "@mui/material";

export const ContainerWrapper = styled(Container)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "4rem",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const Item = styled(Box)(({ theme }) => ({
  margin: "5rem 0",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flex: "5",
  gap: "1rem",
}));

export const ItemImg = styled(Box)(({ theme }) => ({
  width: "300px",
  height: "400px",
  paddingTop: "5rem",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    height: "400px",
  },
}));
