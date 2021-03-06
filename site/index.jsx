import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Redirect, Route, withRouter } from 'react-router-dom';
import BasicLayout from './BasicLayout';

import './style';

const req = require.context('../components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);
req.keys().forEach(mod => {
  req(mod);
});

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
      <Route exact path="/" render={() => <Redirect to="/use-with-create-react-app" />} />
    </ScrollToTop>
  </Router>,
  document.getElementById('root'),
);
