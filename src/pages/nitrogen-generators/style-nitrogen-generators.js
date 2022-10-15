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
    backgroundImage: `url(
      "https://www.kibrispdr.org/data/50/cool-background-hd-26.jpg"
    )`,
    borderBottomLeftRadius: "30% ",
    borderBottomRightRadius: "30% ",
    boxShadow: "inset 0 -25px 22px 14px rgba(0,0,0,0.4);",
  },
}));

export const Top = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "5rem 0",
  ".download": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
