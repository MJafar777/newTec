import { Box, CardContent, CardMedia, styled } from "@mui/material";

export const WrapperCard = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  marginBottom: "5rem ",
}));

export const CardMediaWrapper = styled(CardMedia)(({ theme }) => ({
  position: "relative",
}));

export const CardContentItem = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  bottom: "0 ",
  background: "#fff",
  opacity: "0.8",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "&:hover": {
    background: "none",
    color: theme.palette.primary.light,
    opacity: 1,
    borderBottom: `4px solid ${theme.palette.primary.light}`,
    borderRadius: "5px",
    transition: "all 0.3s ease-out",
  },
}));
