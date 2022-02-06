import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export const SideNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  /* TODO Write the necessary functions to show and hide the sidebar on small devices */

  return (
    <SideNavBarCont className={isOpen ? "visible" : ""}>
      {/*TODO Implement a hamburger icon slide in effect for small devices*/}
      <SideNavMainLinkCont>
        <PrimaryNavLink className="menu_nav_link" to="/">
          Wesley
          <NavIcon src={Arrow} alt="arrow icon" />
        </PrimaryNavLink>
        <PrimaryNavLink className="menu_nav_link" to="/discover">
          Discover
          <NavIcon src={SearchWhite} alt="magnifier icon" />
        </PrimaryNavLink>
      </SideNavMainLinkCont>
      <SideNavSubMenu>
        <SubMenuHeader>Watched</SubMenuHeader>
        <SecondaryNavLink className="menu_nav_link" to="/watched/movies">
          Movies
        </SecondaryNavLink>
        <SecondaryNavLink className="menu_nav_link" to="/watched/tv-shows">
          Tv Shows
        </SecondaryNavLink>
      </SideNavSubMenu>
      <SideNavSubMenu>
        <SubMenuHeader>Saved</SubMenuHeader>
        <SecondaryNavLink className="menu_nav_link" to="/saved/movies">
          Movies
        </SecondaryNavLink>
        <SecondaryNavLink className="menu_nav_link" to="/saved/tv-shows">
          Tv Shows
        </SecondaryNavLink>
      </SideNavSubMenu>
    </SideNavBarCont>
  );
};

const SideNavBarCont = styled.nav`
  position: fixed;
  z-index: 9;
  width: ${({ theme }) => theme.constants.sidebarWidth}px;
  height: 100%;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.palette.sideNavBar};
`;

const SideNavMainLinkCont = styled.div`
  padding-bottom: 10px;
`;

const BaseNavLink = styled(Link)`
  color: ${({ theme }) => theme.palette.white};
`;

const PrimaryNavLink = styled(BaseNavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 23px 35px;
  font-size: 1.6em;
  font-weight: 700;
`;

const SecondaryNavLink = styled(BaseNavLink)`
  display: block;
  font-size: 0.75em;
  padding: 10px 0;
`;

const NavIcon = styled.img``;

const SideNavSubMenu = styled.div`
  font-size: 1.6em;
  margin-left: 35px;
  color: ${({ theme }) => theme.palette.white};
  margin-bottom: 35px;
`;

const SubMenuHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.fontColor};
  padding: 15px 0;
`;
