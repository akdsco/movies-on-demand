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
