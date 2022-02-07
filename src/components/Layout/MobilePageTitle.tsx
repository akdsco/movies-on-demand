import React from "react";
import styled from "styled-components";
// @ts-ignore as there is no support for TS? :sad-face:
import LineIcon from "react-lineicons";

type MobilePageTitleProps = {
  title: string;
  setNavMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobilePageTitle: React.FC<MobilePageTitleProps> = ({
  title,
  setNavMenuOpen,
}) => {
  return (
    <MobilePageTitleStyled>
      <button className="open-menu" onClick={() => setNavMenuOpen(true)}>
        <LineIcon name="menu" />
      </button>
      <h1 className="mobile-header">{title}</h1>
    </MobilePageTitleStyled>
  );
};

export const MobilePageTitleStyled = styled.header`
  .open-menu {
    all: unset;
    font-size: 24px;
    transition: all ${({ theme }) => theme.duration.short}ms;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.palette.sideNavBar};
    }
  }
  .mobile-header {
    font-size: 1.6em;
    display: inline-block;
    padding-left: 10px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: none;
  }
`;
