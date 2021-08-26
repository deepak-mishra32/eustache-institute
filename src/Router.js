import React from "react";
import { BrowserRouter as Routing, Switch, Route } from "react-router-dom";
import App from "./App";

function Router() {
  return (
    <Routing>
      <Switch>
        <Route path="/" exact component={App} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Routing>
  );
}

export default Router;
