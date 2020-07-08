import styled from "styled-components";

const InputStyled = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 12px;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  background-color: ${({ theme }) => theme.bodyFontColor};
  color: ${({ theme }) => theme.bodyBackgroundColor};

  ::placeholder {
    color: ${({ theme }) => theme.bodyBackgroundColor};
  }
`;

export { InputStyled };
