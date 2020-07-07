import React, { Fragment } from "react";
import GlobalStyled from "./global.styled";
import { ButtonStyled } from "components";

const App = () => (
  <Fragment>
    <GlobalStyled />
    <h1>App</h1>
    <ButtonStyled>Test</ButtonStyled>
  </Fragment>
);

export default App;
