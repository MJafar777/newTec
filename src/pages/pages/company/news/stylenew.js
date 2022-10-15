import { Box, Card, Container, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  margin: "5rem 0",
  wdith: "100%",
  ".Container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const CardWrapper = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  width: 345,
  height: "100%",
  "&:hover": {
    borderBottom: `3px solid ${theme.palette.primary.light}`,
    color: theme.palette.primary.light,
  },
  ".Description": {
    fontWeight: "500",
    fontSize: "15px",
    marginBottom: "1rem",
  },
}));
