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
    flexDirection: " column",
    gap: "10rem",
  },
}));

export const ItemLeft = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  flex: "1",
  ".download": {
    display: "flex",
    flexDirection: " column",
    alignItems: "center ",
  },
  ".ButtonDownload": {
    height: "3rem",
    borderRadius: "2rem",
    backgroundImage: `url(
      "https://www.kibrispdr.org/data/50/cool-background-hd-26.jpg"
    )`,
  },
  ".ItemImg": {
    width: "500px",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "300px",
    },
  },
}));
export const ItemRight = styled(Box)(({ theme }) => ({
  flex: "1",
  ".List": {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "5rem",
  },
}));
