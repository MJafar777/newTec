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
    backgroundImage: `url(
      "https://www.kibrispdr.org/data/50/cool-background-hd-26.jpg"
    )`,
    boxShadow: "inset 0 -25px 22px 14px rgba(0,0,0,0.4);",
    borderBottomLeftRadius: "30% ",
    borderBottomRightRadius: "30% ",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    color: "#fff",
  },
  ".border": {
    borderTop: "0.1px solid ",
    width: "10px",
  },
}));
