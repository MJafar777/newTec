import { Box, Container, styled } from "@mui/material";

export const ContainerWrapper = styled(Container)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "ceneter",
  justifyContent: "center",
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
  gap: "1rem",
}));
