import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';
import BasicLayout from './BasicLayout';

import './style';

ReactDOM.render(
  <Router>
    <BasicLayout />
    <Route exact path="/" render={() => <Redirect to="/icon" />} />
  </Router>,
  document.getElementById('root'),
);
