import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  ".Content": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const Top = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "500px",
  backgroundImage: `url(
    "https://www.kibrispdr.org/data/50/cool-background-hd-26.jpg"
  )`,
  boxShadow: "inset 0 -25px 22px 14px rgba(0,0,0,0.4);",
  borderBottomLeftRadius: "30% ",
  borderBottomRightRadius: "30% ",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  ".ButtonMore": {
    width: "17rem",
    height: "3rem",
    borderRadius: "10px",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
