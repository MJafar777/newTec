import { Box, Container, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "3rem",
  ".title": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    width: "100%",
    height: "200px",
    backgroundImage: `url(
      "https://www.kibrispdr.org/data/50/cool-background-hd-26.jpg"
    )`,
    boxShadow: "inset 0 -25px 22px 14px rgba(0,0,0,0.4);",
    borderBottomLeftRadius: "30% ",
    borderBottomRightRadius: "30% ",
  },
}));

export const Description = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "3rem",
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
