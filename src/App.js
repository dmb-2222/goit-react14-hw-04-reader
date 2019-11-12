import React from "react";
import ReaderPages from "./componets/Pages/ReaderPages";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <Switch>
    <Route exact path="/reader">
      <ReaderPages />}
    </Route>
    <Route>
      <Redirect to="/reader" />
    </Route>
  </Switch>
);

export default App;
