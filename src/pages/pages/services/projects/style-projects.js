import { Box, Container, styled } from "@mui/material";

export const Wrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "5rem",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

export const Description = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  marginTop: "5rem",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
  ".companyTitle": {
    flex: 3,
  },
  ".companyDescription": {
    flex: 5,
    fontWeight: "300",
  },
}));

