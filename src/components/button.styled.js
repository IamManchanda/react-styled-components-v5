import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  color: white;
  background: ${({ primary, secondary }) => {
    if (primary) return "#f8049c";
    if (secondary) return "black";
    return "#f8049c";
  }};
  font-weight: bold;
  ${({ large }) => {
    if (large) {
      return css`
        padding: 10px;
        border-radius: 5px;
        font-size: 1.5em;
      `;
    }
    return css`
      padding: 8px;
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
    background: #eee;
    color: #666;
  }
`;

export { ButtonStyled };
