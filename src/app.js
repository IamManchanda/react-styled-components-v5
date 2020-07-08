import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyled from "./global.styled";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const App = () => (
  <Fragment>
    <GlobalStyled />
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  </Fragment>
);

export default App;
