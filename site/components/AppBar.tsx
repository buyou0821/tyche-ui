import React, { useState } from 'react';
import { AppBar, Icon, Button, Drawer } from 'components';
import SiderNav from './SiderNav';

const { IconButton, Typography, ToolBar } = AppBar;

export default () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const handleIconButtonClick = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <AppBar color="primary" className="demo-layout-appBar">
      <IconButton md={0} ButtonProps={{ onClick: handleIconButtonClick }}>
        <Icon style={{ color: '#fff', fontSize: 22 }} type="list" />
      </IconButton>
      <Typography>
        <i className="demo-layout-logo" style={{ fontSize: 32, marginRight: 12 }} />
        Tyche UI
      </Typography>
      <ToolBar>
        <Button shape="icon" href="https://github.com/buyou0821/tyche-ui" target="_blank">
          <Icon style={{ color: '#fff', fontSize: 24 }} type="github" />
        </Button>
      </ToolBar>
      <Drawer style={{ overflow: 'hidden' }} visible={drawerVisible} onClose={closeDrawer}>
        <SiderNav linkClick={closeDrawer} />
      </Drawer>
    </AppBar>
  );
};
