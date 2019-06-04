import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Redirect, Route, withRouter } from 'react-router-dom';
import BasicLayout from './BasicLayout';

import './style';

const ScrollToTopComp = ({ children, location: { pathname } }) => {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const ScrollToTop = withRouter(ScrollToTopComp);

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <BasicLayout />
      <Route exact path="/" render={() => <Redirect to="/icon" />} />
    </ScrollToTop>
  </Router>,
  document.getElementById('root'),
);
