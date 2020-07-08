import styled from "styled-components";

const FormStyled = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.bodyFontColor};
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.bodyBackgroundColor};
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 12px 0;
  }
`;

export { FormStyled };
