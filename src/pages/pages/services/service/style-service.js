import { Box, Container, styled } from "@mui/material";

export const Wrapper = styled(Container)(({ theme }) => ({
  height: "200px",
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "2rem 0",
  },
  ".companyTitle": {
    flex: 3,
  },
  ".companyDescription": {
    flex: 5,
    fontWeight: "300",
  },
}));

export const Description = styled(Box)(({ theme }) => ({
  display: "flex",
}));
