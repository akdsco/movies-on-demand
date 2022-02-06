import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { SideNavBar } from "./components";
import { DiscoverPage, ComingSoonPage } from "./pages";
import { theme } from "./colors";
import "./css/global-style.css";

const App: React.FC = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <SideNavBar {...props} />
        <ContentWrapper>
          <Routes>
            <Route
              path="/"
              element={<ComingSoonPage {...props} pageName="Main page" />}
            />
            <Route path="/discover" element={<DiscoverPage {...props} />} />
            <Route
              path="/saved/movies"
              element={<ComingSoonPage {...props} pageName="Saved movies" />}
            />
            <Route
              path="/saved/tv-shows"
              element={<ComingSoonPage {...props} pageName="Saved TV Shows" />}
            />
            <Route
              path="/watched/movies"
              element={<ComingSoonPage {...props} pageName="Watched movies" />}
            />
            <Route
              path="/watched/tv-shows"
              element={
                <ComingSoonPage {...props} pageName="Watched TV Shows" />
              }
            />
          </Routes>
        </ContentWrapper>
      </PageContainer>
    </ThemeProvider>
  );
};

const ContentWrapper = styled.main`
  padding-left: 260px;
`;

const PageContainer = styled.div`
  overflow-x: hidden;
`;

export default App;
