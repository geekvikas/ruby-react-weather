import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Weather from "../components/Weather";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Weather} />
      </Switch>
    </Router>
  );
}
