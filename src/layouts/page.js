import React, { Fragment } from "react";
import styled from "styled-components";

import NavHeader from "components/nav-header";

const PageLayoutStyled = styled.main`
  max-width: 800px;
  margin: 80px auto 0;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Kaushan Script", cursive;
  }
`;

const PageLayout = ({ children }) => (
  <Fragment>
    <NavHeader />
    <PageLayoutStyled>{children}</PageLayoutStyled>
  </Fragment>
);

export default PageLayout;
