import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: "5rem ",
  ".border": {
    borderTop: "1px solid #DAD0D5",
    margin: "1rem 0",
  },
  ".pagination": {
    paddingRight: "auto",
  },
  ".ImgContainer": {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  },
}));
