import { Box, Container, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  ".Content": {
    width: "100%",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(
      "https://www.kibrispdr.org/data/50/cool-background-hd-26.jpg"
    )`,
    borderBottomLeftRadius: "30% ",
    borderBottomRightRadius: "30% ",
    boxShadow: "inset 0 -25px 22px 14px rgba(0,0,0,0.4);",
  },
}));

export const ItemWrapper = styled(Container)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  gap: "3rem",
  marginTop: "5rem",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
}));

export const ItemLeft = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  flex: "1",
}));
export const ItemRight = styled(Box)(({ theme }) => ({
  flex: "1",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
  ".ItemImg": {
    width: "500px",
    height: "500px",
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginBottom: "10rem",
      width: "300px",
      height: "300px",
    },
  },
}));
