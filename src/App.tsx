import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SideNavBar from "./components/sidenavbar";
import Discover from "./pages/discover";
import "./css/global-style.css";

export const App: React.FC = (props) => {
  return (
    <PageContainer>
      <SideNavBar {...props} />
      <ContentWrapper>
        <Routes>
          <Route path="/discover" element={<Discover {...props} />} />
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
