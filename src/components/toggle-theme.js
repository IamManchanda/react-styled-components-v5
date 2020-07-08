import React from "react";
import styled from "styled-components";

const ToggleThemeStyled = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  cursor: pointer;
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.primaryColor},
    ${({ theme }) => theme.secondaryColor}
  );
`;

const NotchStyled = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background-color: #fefefe;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${({ isActive }) => (isActive ? "26px" : "1px")});
  cursor: default;
`;

const ToggleTheme = ({ isActive, onToggle }) => (
  <ToggleThemeStyled onClick={onToggle}>
    <NotchStyled isActive={isActive} />
  </ToggleThemeStyled>
);

export default ToggleTheme;
