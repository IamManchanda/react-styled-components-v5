import React, { Fragment, useState, useEffect } from "react";

import PageLayout from "layouts/page";
import {
  FormStyled,
  InputStyled,
  ButtonStyled,
  LoadingSpinnerStyled,
} from "components/ui";
import PasswordInput from "components/password-input";

const LoginPage = () => {
  let timeout;
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = (event) => {
    event.persist();
    setFormFields((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => setLoading(false), 2000);
  };
  useEffect(() => {
    return () => timeout && clearTimeout(timeout);
  }, [timeout]);
  return (
    <PageLayout>
      <h1>Login</h1>
      <FormStyled onSubmit={handleFormSubmit}>
        {loading ? (
          <LoadingSpinnerStyled />
        ) : (
          <Fragment>
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
          </Fragment>
        )}
        <ButtonStyled type="submit" primary large disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </ButtonStyled>
        {!loading && (
          <Fragment>
            <div className="alt-text">OR</div>
            <ButtonStyled secondary type="button">
              Register
            </ButtonStyled>
          </Fragment>
        )}
      </FormStyled>
    </PageLayout>
  );
};

export default LoginPage;
