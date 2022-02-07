import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { SideNavBar } from "./components";
import { DiscoverPage, ComingSoonPage } from "./pages";
import { theme } from "./theme";
import { GlobalCSS } from "./css/global.css";

const App: React.FC = (props) => {
  const [navMenuOpen, setNavMenuOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <SideNavBar
        {...props}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
      />
      <ContentWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <ComingSoonPage
                {...props}
                pageName="Main page"
                setNavMenuOpen={setNavMenuOpen}
              />
            }
          />
          <Route
            path="/discover"
            element={
              <DiscoverPage {...props} setNavMenuOpen={setNavMenuOpen} />
            }
          />
          <Route
            path="/saved/movies"
            element={
              <ComingSoonPage
                {...props}
                pageName="Saved movies"
                setNavMenuOpen={setNavMenuOpen}
              />
            }
          />
          <Route
            path="/saved/tv-shows"
            element={
              <ComingSoonPage
                {...props}
                pageName="Saved TV Shows"
                setNavMenuOpen={setNavMenuOpen}
              />
            }
          />
          <Route
            path="/watched/movies"
            element={
              <ComingSoonPage
                {...props}
                pageName="Watched movies"
                setNavMenuOpen={setNavMenuOpen}
              />
            }
          />
          <Route
            path="/watched/tv-shows"
            element={
              <ComingSoonPage
                {...props}
                pageName="Watched TV Shows"
                setNavMenuOpen={setNavMenuOpen}
              />
            }
          />
        </Routes>
      </ContentWrapper>
    </ThemeProvider>
  );
};

const ContentWrapper = styled.div`
  padding-left: ${({ theme }) => theme.constants.sidebarWidth}px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-left: unset;
  }
`;

export default App;
