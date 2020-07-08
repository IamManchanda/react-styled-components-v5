import React, { useState } from "react";
import styled from "styled-components";
import { InputStyled } from "components/ui";

const PasswordInputStyled = styled(InputStyled).attrs(() => ({
  type: "password",
  placeholder: "Enter Password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return <PasswordInputStyled {...props} />;
};

export default PasswordInput;
