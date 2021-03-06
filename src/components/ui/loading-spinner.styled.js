import styled, { keyframes } from "styled-components";

const loadingSpinnerRotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinnerStyled = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${loadingSpinnerRotation} 1s linear infinite;
`;

export { LoadingSpinnerStyled };
