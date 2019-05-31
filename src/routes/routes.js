import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// @load component
import CreateBirthday from "../components/createBirthday";
import App from "../App";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/create-birthday" component={CreateBirthday} />
    </Switch>
  </Router>
);

export default Routes;
