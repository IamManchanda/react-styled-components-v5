import React, { useState } from "react";

import PageLayout from "layouts/page";
import { FormStyled, InputStyled } from "components/ui";

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
        <InputStyled
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formFields.password}
          onChange={handleInputChange}
        />
      </FormStyled>
    </PageLayout>
  );
};

export default LoginPage;
