import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link as RRDLink, useLocation } from "react-router-dom";

import ToggleTheme from "components/toggle-theme";

const NavHeaderStyled = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.primaryColor},
    ${({ theme }) => theme.secondaryColor}
  );
  border-bottom: 3px solid ${({ theme }) => theme.secondaryColor};
`;

const MenuStyled = styled.nav`
  display: ${({ open }) => (open ? "block" : "none")};
  font-family: "Open Sans", sans-serif;
  position: absolute;
  width: 100%;
  top: 60px;
  height: calc(100vh - 60px);
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${({ theme }) => theme.secondaryColor};
  background-color: ${({ theme }) => theme.bodyFontColor};

  @media (min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
    height: initial;
    top: initial;
    left: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    background: none;
  }
`;

const Link = ({ isActive, children, ...otherProps }) => (
  <RRDLink {...otherProps}>{children}</RRDLink>
);

const LinkStyled = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  color: ${({ theme }) => theme.bodyBackgroundColor};
`;

const HamburgerIconStyled = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 3px;
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavHeader = () => {
  const { pathname } = useLocation();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);
  return (
    <NavHeaderStyled>
      <HamburgerIconStyled onClick={() => setHamburgerOpen((state) => !state)}>
        <div />
        <div />
        <div />
      </HamburgerIconStyled>
      <MenuStyled open={hamburgerOpen}>
        <LinkStyled to="/" isActive={pathname === "/"}>
          Home
        </LinkStyled>
        <LinkStyled to="/login" isActive={pathname === "/login"}>
          Login
        </LinkStyled>
        <ToggleTheme isActive={id === "dark"} onToggle={setTheme} />
      </MenuStyled>
    </NavHeaderStyled>
  );
};

export default NavHeader;
