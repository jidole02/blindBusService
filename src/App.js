import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import MainContainer from './Container/MainContainer/MainContainer';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={MainContainer} />

    </Router>
  )
}

export default App;
