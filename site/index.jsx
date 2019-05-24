import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout } from 'components/index';
import Buttons from './demo/button';
import IconPage from './pages/Icon';
import Portal from './pages/Portal';
import ModalPage from './pages/Modal';
import LayoutPage from './pages/Layout';
import './style';

const { Header, Sider, Content } = Layout;

ReactDOM.render(
  <Router>
    <Layout>
      <Header>
        <div className="logo">Tyche UI</div>
      </Header>
      <Layout>
        <Sider className="md-menu">
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
        </Sider>
        <Content>
          <Route path="/icon" component={IconPage} />
          <Route path="/button" component={Buttons} />
          <Route path="/portal" component={Portal} />
          <Route path="/modal" component={ModalPage} />
          <Route path="/layout" component={LayoutPage} />
        </Content>
      </Layout>
    </Layout>
  </Router>,
  document.getElementById('root'),
);
