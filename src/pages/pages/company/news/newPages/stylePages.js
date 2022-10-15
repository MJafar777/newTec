import { Box, Container, styled } from "@mui/material";

export const Wrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
  ".border": {
    borderRight: "2px solid #DFDFDF",
    width: "100%",
  },
}));

export const ItemLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: " center",
  flex: "2",
  gap: "1rem",
  marginTop: "5rem ",
  ".About": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    color: "#95A5A6",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      display: "flex",
      flexDirection: "column",
    },
  },
  ".about_border": {
    borderRight: "2px solid #95A5A6",
    height: "1rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  img: {
    width: "700px",
    height: "700px",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      height: "200px",
    },
  },
}));

export const ItemRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: "1",
  margin: "5rem 2rem",
  ".input": {
    position: "relative",
    border: "0.1px solid #BFBFBF",
    height: "2rem",
    borderBottomLeftRadius: "4px",
    borderTopLeftRadius: "4px",
    outline: "none",
  },
  ".button": {
    height: "2rem",
    width: "4rem",
    position: "absolute",
    border: "0.1px solid #BFBFBF",
    background: "#DFDFDF",
    color: "rgba(0,0,0,0.4)",
    fontWeight: "500",
    fontFamily: "system-ui",
    cursor: "pointer",

    borderBottomRightRadius: "4px",
    borderTopRightRadius: "4px",
  },
}));
