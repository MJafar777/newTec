import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: "2rem ",
  ".border": {
    borderTop: "1px solid #DAD0D5",
    margin: "1rem 0",
  },
  ".pagination": {
    paddingRight: "auto",
  },
  ".ImgContainer": {
    display: "flex",
    gap: "2rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  ".ImgItem": {
    borderRadius: "5px",
  },
}));
