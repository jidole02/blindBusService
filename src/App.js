import React from "react";
/* import { Route, BrowserRouter as Router } from "react-router-dom"; */
import SpeckOut from "./Components/SpeckOut";
import {Route, Router,Switch, BrowserRouter} from 'react-router-dom'
import MainContainer from "./Container/MainContainer/MainContainer";
import BusAlarm from './Component/busAlarm'
import img from './Component/Container/캡처.PNG'
import Footer from './Component/footer'
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
         <Route path="/"> <BusAlarm></BusAlarm><Footer></Footer></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
