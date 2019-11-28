import React from "react";
import ReaderPages from "./componets/Pages/ReaderPages";
import { Route, Switch, Redirect } from "react-router-dom";
import "./common/css/Reader.module.css"

const App = () => (
  <Switch>
    <Route exact path="/reader">
      <ReaderPages />
    </Route>
    <Route>
      <Redirect to={{ pathname: '/reader', search: '?page=1' }}/>
    </Route>
  </Switch>
);

export default App;
