import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "5rem",
  ".Content": {
    width: "100%",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(
      "https://www.kibrispdr.org/data/50/cool-background-hd-26.jpg"
    )`,
    boxShadow: "inset 0 -25px 22px 14px rgba(0,0,0,0.4);",
    borderBottomLeftRadius: "30% ",
    borderBottomRightRadius: "30% ",
    fontWeight: "600",
    color: "#fff",
  },
  ".ItemWrapper": {
    display: "flex",
    marginBottom: "10rem",
    gap: "10rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

export const ItemLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: "1",
  flexDirection: "column",
  gap: "1rem",
  ".Item": {
    display: "flex",
    gap: "1rem",
  },
  ".icon": {
    fontSize: "40px",
    color: "#9A9693",
  },
}));
export const ItemRight = styled(Box)(({ theme }) => ({
  flex: "1",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ".InputtContent": {
    display: "flex",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  },
  ".inputText": {
    outline: "none",
    background: "#F0F0F0",
    border: "none",
    paddingLeft: "1rem",
    width: "300px",
    height: "50px",
  },
  ".Textarea": {
    padding: "1rem 0 0 1rem",
    color: "#9A9693",
    outline: "none",
    textDecoration: "none",
    background: "#F0F0F0",
    border: "none",
    marginTop: "1rem",
    width: "615px",
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  ".resultInput": {
    outline: "none",
    background: "#F0F0F0",
    border: "none",
    width: "2rem",
    height: "2rem",
    margin: "0 1rem 0 0.5rem",
  },
}));
