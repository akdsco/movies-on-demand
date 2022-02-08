import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

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
      <IconButton onClick={() => setNavMenuOpen(true)}>
        <MenuIcon />
      </IconButton>
      <h1 className="mobile-header">{title}</h1>
    </MobilePageTitleStyled>
  );
};

export const MobilePageTitleStyled = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  .mobile-header {
    margin: 0;
    font-size: 1.6em;
    display: inline-block;
    padding-left: 10px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: none;
  }
`;
