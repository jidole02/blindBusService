import React from "react";
/* import { Route, BrowserRouter as Router } from "react-router-dom"; */
import { Route, BrowserRouter as Router } from "react-router-dom";
import MainContainer from "./Container/MainContainer/MainContainer";
import BusAlarm from './Component/busAlarm'
import img from './Component/Container/캡처.PNG'
import Footer from './Component/footer'
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';

dotenv.config();

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={MainContainer} />
    </Router>
  );
};

export default App;
