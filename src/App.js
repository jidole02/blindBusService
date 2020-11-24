import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SpeakOut from "./Components/SpeakOut/SpeakOut";
import PinedLocation from "./Components/PinedLocation/PinedLocation";
//import MainContainer from "./Container/MainContainer/MainContainer";

const App = () => {
  return (
    <Router>
      {/* <Route exact path="/" component={MainContainer} /> */}
      <Route exact path="/" component={SpeakOut} />
      <Route exact path="/내위치" component={PinedLocation} />
    </Router>
  );
};

export default App;
