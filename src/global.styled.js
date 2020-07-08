import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyFontColor};
    min-height: 100vh;
    margin: 0;
    color: ${({ theme }) => theme.bodyBackgroundColor};
    font-family: "Kaushan Script", cursive;
  }
`;

export default GlobalStyled;
