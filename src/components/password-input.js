import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { InputStyled } from "components/ui";

const PasswordInputStyledWrapper = styled.div`
  display: flex;

  ~ div {
    margin-bottom: 8px;
  }
`;

const PasswordInputStyled = styled(InputStyled).attrs(() => ({
  type: "password",
  placeholder: "Enter Password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButtonStyled = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`;

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Fragment>
      <PasswordInputStyledWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButtonStyled onClick={() => setShowPassword((state) => !state)}>
          {showPassword ? "Hide" : "Show"}
        </ToggleButtonStyled>
      </PasswordInputStyledWrapper>
      <div>
        <p> {showPassword ? props.value : ""}</p>
      </div>
    </Fragment>
  );
};

export default PasswordInput;
