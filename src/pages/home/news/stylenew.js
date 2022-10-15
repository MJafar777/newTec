import { Card, Container, styled } from "@mui/material";

export const Wrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  marginBottom : "3rem"
}));

export const CardWrapper = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  width: 345,
  height: "100%",
  borderTop: `1px solid ${theme.palette.primary.main}`,
  "&:hover": {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
  ".Description": {
    fontWeight: "500",
    fontSize: "15px",
    marginBottom: "1rem",
  },
}));
