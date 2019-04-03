import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Icon } from 'components/index';

const IconWrapper = () => {
  return (
    <Icon material="face" style={{ color: '#f66' }}>
      face
    </Icon>
  );
};

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">Tyche UI</div>
      </header>
      <div>
        <aside>
          <h2>components</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconWrapper} />
        </main>
      </div>
    </div>
  </Router>,
  document.getElementById('root'),
);
