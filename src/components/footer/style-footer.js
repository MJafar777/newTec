import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  background: "#F0F0F0",
  justifyContent: "space-around",
  padding: "1rem 0",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  ".Content": {
    width: "100%",
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    ".Item": {
      flex: "1",
    },
  },
  ".ItemWrapper": {
    display: "flex",
    gap: "10rem",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
  },
  ".border": {
    width: "90%",
    borderTop: "1px solid #DAD0D5",
    margin: "10px 0",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));
