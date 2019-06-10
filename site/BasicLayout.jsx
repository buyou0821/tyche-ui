import React, { useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { Layout, Button, Row, Col } from 'components';
import { Route, NavLink } from 'react-router-dom';
import AppBarPage from './pages/AppBar';
import SiderNav from './pages/SiderNav';
import { appBar, buttons, drawer, grid, icon, layout, modal, portal } from './demo';
import ModalPage from './pages/Modal';
import LayoutPage from './pages/Layout';
import GridPage from './pages/Grid';
import DrawerPage from './pages/Drawer';
import InputPage from './pages/Input';

const { Header, Sider, Content } = Layout;

const BasicLayout = () => {
  const [hideSider, setHideSider] = useState(false);

  const handleBreakpoint = broken => {
    setHideSider(broken);
  };

  const siderClasses = clsx('demo-sider', {
    'demo-sider--hide': hideSider,
  });

  const hasSiderClasses = clsx({
    'demo-content--hasSider': !hideSider,
  });

  return (
    <Layout>
      <Header className="demo-header">
        <AppBarPage />
      </Header>
      <Layout>
        <Sider width={255} className={siderClasses} breakpoint="md" onBreakpoint={handleBreakpoint}>
          <SiderNav />
        </Sider>
        <Content className={hasSiderClasses}>
          <Route path="/icon" component={icon} />
          <Route path="/buttons" component={buttons} />
          <Route path="/portal" component={portal} />
          <Route path="/modal" component={modal} />
          <Route path="/layout" component={layout} />
          <Route path="/grid" component={grid} />
          <Route path="/appbar" component={appBar} />
          <Route path="/drawer" component={drawer} />
          <Route path="/input" component={InputPage} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
