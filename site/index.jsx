import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout } from 'components/index';
import ButtonsMD from './demo/buttons';
import IconMD from './demo/icon';
import PortalMD from './demo/portal';
import ModalMD from './demo/modal';
import LayoutMD from './demo/layout';
import GridMD from './demo/grid';
// import IconPage from './pages/IconMD';
// import Portal from './pages/Portal';
import ModalPage from './pages/Modal';
import LayoutPage from './pages/Layout';
import GridPage from './pages/Grid';
import AppBarPage from './pages/AppBar';
import './style';

const { Header, Sider, Content } = Layout;

ReactDOM.render(
  <Router>
    <Layout>
      <Header className="demo-header">
        <AppBarPage />
        <div className="logo">Tyche UI</div>
      </Header>
      <Layout>
        <Sider className="md-menu">
          <h2>components</h2>
          <ul>
            <li>
              <Link to="/icon">icon</Link>
            </li>
            <li>
              <Link to="/buttons">buttons</Link>
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
            <li>
              <Link to="/grid">grid</Link>
            </li>
          </ul>
        </Sider>
        <Content>
          <Route path="/icon" component={IconMD} />
          <Route path="/buttons" component={ButtonsMD} />
          <Route path="/portal" component={PortalMD} />
          <Route path="/modal" component={ModalMD} />
          <Route path="/layout" component={LayoutPage} />
          <Route path="/grid" component={GridMD} />
        </Content>
      </Layout>
    </Layout>
  </Router>,
  document.getElementById('root'),
);
