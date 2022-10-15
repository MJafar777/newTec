import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  ".Items": {
    height: "100%",
    width: "100%",
  },
}));
