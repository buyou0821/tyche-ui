import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import BasicLayout from './BasicLayout';

import './style';

ReactDOM.render(
  <Router>
    <BasicLayout />
  </Router>,
  document.getElementById('root'),
);
