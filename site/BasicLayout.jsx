import React, { useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { Layout, Button, Row, Col } from 'components';
import { Route, NavLink } from 'react-router-dom';
import AppBarPage from './pages/AppBar';
import SiderNav from './pages/SiderNav';
import ButtonsMD from './demo/buttons';
import IconMD from './demo/icon';
import PortalMD from './demo/portal';
import ModalMD from './demo/modal';
import LayoutMD from './demo/layout';
import GridMD from './demo/grid';
import AppBarMD from './demo/appBar';
import DrawerMD from './demo/drawer';
// import IconPage from './pages/IconMD';
// import Portal from './pages/Portal';
import ModalPage from './pages/Modal';
import LayoutPage from './pages/Layout';
import GridPage from './pages/Grid';
import DrawerPage from './pages/Drawer';

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
          <Route path="/icon" component={IconMD} />
          <Route path="/buttons" component={ButtonsMD} />
          <Route path="/portal" component={PortalMD} />
          <Route path="/modal" component={ModalMD} />
          <Route path="/layout" component={LayoutMD} />
          <Route path="/grid" component={GridMD} />
          <Route path="/appbar" component={AppBarMD} />
          <Route path="/drawer" component={DrawerMD} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
