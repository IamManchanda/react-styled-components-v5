import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyled from "global.styled";
import HomePage from "pages/home";
import LoginPage from "pages/login";
import { lightTheme, darkTheme } from "themes";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () =>
          setTheme(({ id }) => (id === "light" ? darkTheme : lightTheme)),
      }}
    >
      <GlobalStyled />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
