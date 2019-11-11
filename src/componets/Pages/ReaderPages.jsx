import React from "react";
import Reader from "../Reader/Readers/Reader";
import publications from "../../publications.json";

const ReaderPages = props => (
  <Reader publications={publications} routProps={props} />
);

export default ReaderPages;
