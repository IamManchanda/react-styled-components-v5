import React, { Fragment } from "react";
import GlobalStyled from "./global.styled";
import { ButtonStyled } from "components";

const App = () => (
  <Fragment>
    <GlobalStyled />
    <h1>App</h1>
    <ButtonStyled>Primary Button</ButtonStyled>
    <ButtonStyled secondary>Secondary Button</ButtonStyled>
    <ButtonStyled>Default Button (Primary)</ButtonStyled>
    <ButtonStyled disabled>Disabled Button</ButtonStyled>
  </Fragment>
);

export default App;
