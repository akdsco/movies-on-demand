import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export const SideNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // TODO implement active menu item
  // const [activeMenuItem, setActiveMenuItem] = React.useState("");
  /* TODO Write the necessary functions to show and hide the sidebar on small devices */

  return (
    <SideNavBarCont className={isOpen ? "visible" : ""}>
      {/*TODO Implement a hamburger icon slide in effect for small devices*/}
      <SideNavMainLinkCont>
        <SideNavMainLink
          className="menu_nav_link main_nav_link"
          to="/"
          active={false}
        >
          Wesley
          <NavIcon src={Arrow} alt="arrow icon" />
        </SideNavMainLink>
        <SideNavMainLink className="menu_nav_link" to="/discover" active={true}>
          Discover
          <NavIcon src={SearchWhite} alt="magnifier icon" />
        </SideNavMainLink>
      </SideNavMainLinkCont>
      <SideNavSubMenu>
        <HeaderText>Watched</HeaderText>
        <NavLink className="menu_nav_link" to="/watched/movies">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/watched/tv-shows">
          Tv Shows
        </NavLink>
      </SideNavSubMenu>
      <SideNavSubMenu>
        <HeaderText>Saved</HeaderText>
        <NavLink className="menu_nav_link" to="/saved/movies">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/saved/tv-shows">
          Tv Shows
        </NavLink>
      </SideNavSubMenu>
    </SideNavBarCont>
  );
};

const SideNavBarCont = styled.nav`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.palette.sideNavBar};
`;

const SideNavMainLinkCont = styled.div`
  padding-bottom: 10px;
`;

const SideNavMainLink = styled(Link)<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 23px 35px;
  font-size: 1.6em;
  font-weight: 700;
  background-color: ${({ active, theme }) =>
    active ? theme.palette.primaryColor : "unset"};
  color: ${({ theme }) => theme.palette.white};
`;

const NavIcon = styled.img``;

const SideNavSubMenu = styled.div`
  font-size: 1.6em;
  margin-left: 35px;
  color: ${({ theme }) => theme.palette.white};
  margin-bottom: 35px;
`;

const HeaderText = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.fontColor};
  padding: 15px 0;
`;

const NavLink = styled(Link)`
  display: block;
  font-size: 0.75em;
  padding: 10px 0;
  color: ${({ theme }) => theme.palette.white};
`;
