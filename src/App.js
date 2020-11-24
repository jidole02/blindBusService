import React from "react";
/* import { Route, BrowserRouter as Router } from "react-router-dom"; */
import { Route, BrowserRouter as Router } from "react-router-dom";
import SpeakOut from "./Components/SpeakOut/SpeakOut";
import PinedLocation from "./Components/PinedLocation/PinedLocation";
import MainContainer from "./Container/MainContainer/MainContainer";
import BusAlarm from './Components/BusAlarm/busAlarm'
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';

dotenv.config();

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={MainContainer} />
      <Route exact path="/speakout" component={SpeakOut} />
      <Route exact path="/pinedlocation" component={PinedLocation} />
    </Router>
  );
};

export default App;
