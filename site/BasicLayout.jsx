import React, { useState } from 'react';
import clsx from 'clsx';
import { Layout, Button, Row, Col } from 'components';
import { Route, Link } from 'react-router-dom';
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
            <Link to="/icon">
              <Button shape="text">Icon 图标</Button>
            </Link>
            <Link to="/buttons">
              <Button shape="text">Buttons 按钮</Button>
            </Link>
            <Link to="/portal">
              <Button shape="text">Portal 传送门</Button>
            </Link>
            <Row className="demo-sider__title">
              <Col offset={3}>布局</Col>
            </Row>
            <Link to="/layout">
              <Button shape="text">Loyout 布局</Button>
            </Link>
            <Link to="/grid">
              <Button shape="text">Grid 栅格</Button>
            </Link>
            <Row className="demo-sider__title">
              <Col offset={3}>反馈</Col>
            </Row>
            <Link to="/modal">
              <Button shape="text">Modal 对话框</Button>
            </Link>
          </div>
        </Sider>
        <Content className={hasSiderClasses}>
          <Route path="/icon" component={IconMD} />
          <Route path="/buttons" component={ButtonsMD} />
          <Route path="/portal" component={PortalMD} />
          <Route path="/modal" component={ModalMD} />
          <Route path="/layout" component={LayoutMD} />
          <Route path="/grid" component={GridMD} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
