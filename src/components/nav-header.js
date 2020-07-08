import React, { useState } from "react";
import styled from "styled-components";
import { Link as RRDLink, useLocation } from "react-router-dom";

const NavHeaderStyled = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 3px solid #fdd54f;
`;

const MenuStyled = styled.nav`
  display: ${({ open }) => (open ? "block" : "none")};
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;
  background-color: white;

  @media (min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
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
  color: black;
`;

const HamburgerIconStyled = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 3px;
    background-color: black;
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
      </MenuStyled>
    </NavHeaderStyled>
  );
};

export default NavHeader;
