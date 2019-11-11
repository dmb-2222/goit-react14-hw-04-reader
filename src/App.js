import React from "react";
import ReaderPages from "./componets/Pages/ReaderPages";
import { Route } from "react-router-dom";

const App = () => <Route path="/reader" component={ReaderPages} />;

export default App;
