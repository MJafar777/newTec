import { AppBar, Container, styled, Toolbar } from "@mui/material";

export const Wrapper = styled(AppBar)(({ theme }) => ({
  background: theme.palette.bgColor.main,
  position: "sticky",
  top: "0",
  zIndex: "999",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const ContainerWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}));

export const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  ".smAppbar": {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      gap: "10rem",
    },
  },
  ".text": {
    cursor: "pointer",
    flex: "1",
  },
  ".smMenu": {
    width: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "60px",
    left: "0rem",
    zIndex: "1000",
  },

  ".Menu": {
    flex: "10",
    width: "900px",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
}));
