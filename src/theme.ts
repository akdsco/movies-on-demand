import { createTheme } from "@mui/material";

const generalPalette = {
  white: "#fff",
  sideNavBar: "#001e2d",
  sideNavBarHover: "#001b29",
  fontColor: "#31475f",
  bodyColor: "#404e5f",
  primaryColor: "#c4ca18",
  primaryActive: "#d9e021",
  lightBackground: "#f6f7f9",
};

export const theme = {
  palette: {
    ...generalPalette,
  },
  duration: {
    short: 250,
  },
  constants: {
    sidebarWidth: 260,
  },
  breakpoints: {
    sm: 600,
    md: 900,
    lg: 1200,
  },
};

// Let's complicate theming a bit and introduce a friend called Material UI. Why?
// I can implement stuff, but I seriously don't think I have the luxury of time to build input fields
// and checkboxes from scratch for free, I've done enough of free work in my career already.
// If I lost you on at this point, then we're sadly, not meant to be.

export const muiTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {},
    },
  },
  palette: {
    primary: {
      main: "#c4ca18",
    },
  },
});
