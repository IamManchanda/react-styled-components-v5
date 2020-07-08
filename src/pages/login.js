import React, { useState } from "react";

import PageLayout from "layouts/page";
import { FormStyled, InputStyled } from "components/ui";
import PasswordInput from "components/password-input";

const LoginPage = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (event) => {
    event.persist();
    setFormFields((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <PageLayout>
      <h1>Login</h1>
      <FormStyled>
        <InputStyled
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formFields.username}
          onChange={handleInputChange}
        />
        <PasswordInput
          name="password"
          value={formFields.password}
          onChange={handleInputChange}
        />
      </FormStyled>
    </PageLayout>
  );
};

export default LoginPage;
