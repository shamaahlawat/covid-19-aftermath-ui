import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store'

import Home from './containers/App/App';
import Logout from "./containers/Logout";

import 'bootstrap/dist/css/bootstrap.min.css';

import {PrivateRoute} from "./HOC/private-route";
function App() {
  return (
      <Provider store = { store }>
          <Router>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/logout" component={Logout} />
              <PrivateRoute exact path="/docs" component={Home}/>
          </Router>
      </Provider>
  );
}

export default App;
