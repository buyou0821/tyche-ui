import React from 'react';
import { Button, Row, Col } from 'components';
import { NavLink } from 'react-router-dom';

const navRoutes = [
  {
    title: '指南',
    children: [
      {
        to: 'use-with-umi',
        text: '在UmiJS中使用',
      },
      {
        to: 'use-with-create-react-app',
        text: '在create-react-app中使用',
      },
    ],
  },
  {
    title: '通用',
    children: [
      {
        to: 'icon',
        text: 'Icon 图标',
      },
      {
        to: 'buttons',
        text: 'Buttons 按钮',
      },
      {
        to: 'portal',
        text: 'Portal 传送门',
      },
    ],
  },
  {
    title: '布局',
    children: [
      {
        to: 'layout',
        text: 'Loyout 布局',
      },
      {
        to: 'grid',
        text: 'Grid 栅格',
      },
    ],
  },
  {
    title: '导航',
    children: [
      {
        to: 'appBar',
        text: 'AppBar 应用栏',
      },
    ],
  },
  {
    title: '反馈',
    children: [
      {
        to: 'modal',
        text: 'Modal 对话框',
      },
      {
        to: 'drawer',
        text: 'Drawer 抽屉',
      },
    ],
  },
  {
    title: '表单',
    children: [
      {
        to: 'input',
        text: 'Input 输入框',
      },
      {
        to: 'radio',
        text: 'Radio 单选框',
      },
      {
        to: 'checkbox',
        text: 'Checkbox 复选框',
      },
    ],
  },
];

interface SiderNavProps {
  linkClick?: (e?: React.MouseEvent<any>) => void;
}

export default (props: SiderNavProps) => {
  const { linkClick } = props;
  return (
    <div className="demo-sider__nav">
      {navRoutes.map(item => (
        <div key={item.title}>
          <Row className="demo-sider__title">
            <Col offset={3}>{item.title}</Col>
          </Row>
          {item.children.map(child => (
            <NavLink to={`/${child.to}`} key={child.to}>
              <Button shape="text" onClick={linkClick}>
                {child.text}
              </Button>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};
