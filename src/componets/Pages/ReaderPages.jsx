import React from "react";
import Reader from "../Reader/Readers/Reader";
import publications from "../../publications.json";
import { withRouter, Route, Redirect } from "react-router-dom";
import queryString from "query-string";

const ReaderPages = props => {
  const pars = +queryString.parse(props.location.search).item;
  console.log(isNaN(pars));
  return (publications.length >= pars && pars !== 0) || isNaN(pars) ? (
    <Reader publications={publications} routProps={props} />
  ) : (
    <Route>
      <Redirect to="/reader?item=1" />
    </Route>
  );
};

export default withRouter(ReaderPages);
