import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SpeckOut from "./Components/SpeckOut";

import MainContainer from "./Container/MainContainer/MainContainer";

const App = () => {
  return (
    <Router>
      {/* <Route exact path="/" component={MainContainer} /> */}
      <Route exact path="/" component={SpeckOut} />
    </Router>
  );
};

export default App;
