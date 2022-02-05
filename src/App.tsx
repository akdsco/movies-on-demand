import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { SideNavBar } from "./components";
import { DiscoverPage } from "./pages";
import "./css/global-style.css";

const App: React.FC = (props) => {
  return (
    <PageContainer>
      <SideNavBar {...props} />
      <ContentWrapper>
        <Routes>
          <Route path="/discover" element={<DiscoverPage {...props} />} />
        </Routes>
      </ContentWrapper>
    </PageContainer>
  );
};

const ContentWrapper = styled.main`
  padding-left: 280px;
`;

const PageContainer = styled.main`
  overflow-x: hidden;
`;

export default App;
