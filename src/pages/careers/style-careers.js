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
  ".Description": {
    marginBottom: "5rem",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")] : {
      display : "flex",
      flexDirection : "column"
    }
  },
}));
