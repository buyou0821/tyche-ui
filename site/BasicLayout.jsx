import React, { useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { Layout, Button, Row, Col } from 'components';
import { Route, NavLink } from 'react-router-dom';
import AppBarPage from './pages/AppBar';
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
        <div className="logo">Tyche UI</div>
      </Header>
      <Layout>
        <Sider width={255} className={siderClasses} breakpoint="md" onBreakpoint={handleBreakpoint}>
          <div className="demo-sider__nav">
            <Row className="demo-sider__title">
              <Col offset={3}>通用</Col>
            </Row>
            <NavLink to="/icon">
              <Button shape="text">Icon 图标</Button>
            </NavLink>
            <NavLink to="/buttons">
              <Button shape="text">Buttons 按钮</Button>
            </NavLink>
            <NavLink to="/portal">
              <Button shape="text">Portal 传送门</Button>
            </NavLink>
            <Row className="demo-sider__title">
              <Col offset={3}>布局</Col>
            </Row>
            <NavLink to="/layout">
              <Button shape="text">Loyout 布局</Button>
            </NavLink>
            <NavLink to="/grid">
              <Button shape="text">Grid 栅格</Button>
            </NavLink>
            <Row className="demo-sider__title">
              <Col offset={3}>反馈</Col>
            </Row>
            <NavLink to="/modal">
              <Button shape="text">Modal 对话框</Button>
            </NavLink>
            <NavLink to="/drawer">
              <Button shape="text">Drawer 抽屉</Button>
            </NavLink>
          </div>
        </Sider>
        <Content className={hasSiderClasses}>
          <Route path="/icon" component={IconMD} />
          <Route path="/buttons" component={ButtonsMD} />
          <Route path="/portal" component={PortalMD} />
          <Route path="/modal" component={ModalMD} />
          <Route path="/layout" component={LayoutMD} />
          <Route path="/grid" component={GridMD} />
          <Route path="/drawer" component={DrawerPage} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
