import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IconPage from './pages/Icon';
import Portal from './pages/Portal';
import ModalPage from './pages/Modal';
import Layout from './pages/Layout';
import Buttons from './demo/button';
import './style';

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">Tyche UI</div>
      </header>
      <div className="tyche-wrapper">
        <aside>
          <h2>components</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">button</Link>
            </li>
            <li>
              <Link to="/portal">Portal</Link>
            </li>
            <li>
              <Link to="/modal">modal</Link>
            </li>
            <li>
              <Link to="/layout">loyout</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconPage} />
          <Route path="/button" component={Buttons} />
          <Route path="/portal" component={Portal} />
          <Route path="/modal" component={ModalPage} />
          <Route path="/layout" component={Layout} />
        </main>
      </div>
    </div>
  </Router>,
  document.getElementById('root'),
);
