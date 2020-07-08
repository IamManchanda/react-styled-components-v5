import React from "react";
import styled from "styled-components";
import { Link as RRDLink } from "react-router-dom";

const NavHeaderStyled = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #eee;
`;

const MenuStyled = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: "Open Sans";
  background: none;
  left: initial;
  top: initial;
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
`;

const NavHeader = () => (
  <NavHeaderStyled>
    <MenuStyled>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="/login" isActive>
        Login
      </LinkStyled>
    </MenuStyled>
  </NavHeaderStyled>
);

export default NavHeader;
