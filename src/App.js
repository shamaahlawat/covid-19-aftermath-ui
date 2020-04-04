import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store'

import Home from './containers/App/App';
import Contribute from "./containers/Contribute/Contribute";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Provider store = { store }>
          <Router>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/contribute" component={Contribute} />
          </Router>
      </Provider>
  );
}

export default App;
