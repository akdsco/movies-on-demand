import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SideNavBar from "./components/sidenavbar";
import Discover from "./pages/discover";
import "./css/global-style.css";

export default class App extends React.Component {
  render() {
    return (
      <PageContainer>
        <SideNavBar {...this.props} />
        <ContentWrapper>
          <Routes>
            <Route path="/discover" component={Discover} {...this.props} />
          </Routes>
        </ContentWrapper>
      </PageContainer>
    );
  }
}

const ContentWrapper = styled.main`
  padding-left: 280px;
`;

const PageContainer = styled.main`
  overflow-x: hidden;
`;
