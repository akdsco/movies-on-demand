import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export const SideNavBar: React.FC<{
  navMenuOpen: boolean;
  setNavMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ navMenuOpen, setNavMenuOpen }) => {
  // Ideally would wrap this function into a HOC but that's a nice cherry on top o have
  const closeNavMenu = () => setNavMenuOpen(false);

  return (
    <SideNavBarCont className={navMenuOpen ? "visible" : ""}>
      {navMenuOpen && (
        <button onClick={closeNavMenu} className="close-menu-btn">
          X
        </button>
      )}
      <SideNavMainLinkCont>
        <PrimaryNavLink onClick={closeNavMenu} className="menu_nav_link" to="/">
          Wesley
          <NavIcon src={Arrow} alt="arrow icon" />
        </PrimaryNavLink>
        <PrimaryNavLink
          onClick={closeNavMenu}
          className="menu_nav_link"
          to="/discover"
        >
          Discover
          <NavIcon src={SearchWhite} alt="magnifier icon" />
        </PrimaryNavLink>
      </SideNavMainLinkCont>
      <SideNavSubMenu>
        <SubMenuHeader>Watched</SubMenuHeader>
        <SecondaryNavLink
          onClick={closeNavMenu}
          className="menu_nav_link"
          to="/watched/movies"
        >
          Movies
        </SecondaryNavLink>
        <SecondaryNavLink
          onClick={closeNavMenu}
          className="menu_nav_link"
          to="/watched/tv-shows"
        >
          Tv Shows
        </SecondaryNavLink>
      </SideNavSubMenu>
      <SideNavSubMenu>
        <SubMenuHeader>Saved</SubMenuHeader>
        <SecondaryNavLink
          onClick={closeNavMenu}
          className="menu_nav_link"
          to="/saved/movies"
        >
          Movies
        </SecondaryNavLink>
        <SecondaryNavLink
          onClick={closeNavMenu}
          className="menu_nav_link"
          to="/saved/tv-shows"
        >
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
  transition: all ${({ theme }) => theme.duration.short}ms;
  background-color: ${({ theme }) => theme.palette.sideNavBar};

  &.visible {
    transform: translateX(0);
  }

  .close-menu-btn {
    border-style: unset;
    //border-top-right-radius: 50%;
    //border-bottom-right-radius: 50%;
    position: absolute;
    top: 4px;
    right: 4px;
    width: 30px;
    height: 30px;
    font-size: 1.2em;
    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => theme.palette.sideNavBar};
    transition: all ${({ theme }) => theme.duration.short}ms;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.palette.sideNavBarHover};
      border: 2px solid white;
      border-radius: 50%;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    transform: translateX(-100%);
  }
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
