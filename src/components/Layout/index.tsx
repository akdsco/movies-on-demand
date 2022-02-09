import styled from "styled-components";

export const PageWrapper = styled.div`
  min-width: 320px;
  padding: 35px 45px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PageContentWrapper = styled.div`
  display: flex;
`;

export const PageMainSection = styled.main`
  flex: 1.66 1.66 0;
`;

export const PageAside = styled.aside`
  display: none;
  flex: 1 1 0;
  margin: 30px 0 0 20px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }
`;

export { MobilePageTitle } from "./MobilePageTitle";
