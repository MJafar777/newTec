import {  Container, styled } from "@mui/material";

export const ContainerWrapper = styled(Container)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "ceneter",
  justifyContent: "center",
  padding: "7rem 0",
  gap: "4rem",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "320px",
  },
  ".certificate": {
    display: "flex",
    gap: "2rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));
