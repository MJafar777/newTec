import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "20rem",
  marginTop: "5rem ",
  background: "#fff",
  display: " flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
  ".border": {
    width: "98%",
    borderTop: "1px solid #DAD0D5",
    margin: "1rem 0",
  },
  ".pagination": {
    paddingRight: "auto",
  },
}));
