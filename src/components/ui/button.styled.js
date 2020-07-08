import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  color: ${({ primary, secondary, theme }) => {
    if (primary) return theme.bodyFontColor;
    if (secondary) return theme.bodyBackgroundColor;
    return theme.bodyFontColor;
  }};
  background-color: ${({ primary, secondary, theme }) => {
    if (primary) return theme.primaryColor;
    if (secondary) return theme.secondaryColor;
    return theme.primaryColor;
  }};
  font-weight: bold;
  ${({ large }) => {
    if (large) {
      return css`
        padding: 12px;
        border-radius: 5px;
        font-size: 1.5em;
      `;
    }
    return css`
      padding: 10px;
      border-radius: 4px;
      font-size: 1em;
    `;
  }}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background-color: #eee;
    color: #666;
  }
`;

export { ButtonStyled };
