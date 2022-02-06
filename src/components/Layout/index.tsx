import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 35px 45px;
`;

export const PageMainSection = styled.main``;

export const MobilePageTitle = styled.header`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: none;
  }
`;
