import React from 'react';
import { AppBar, Icon, Button } from 'components';

const { IconButton, Typography, ToolBar } = AppBar;

export default () => (
  <AppBar color="primary" className="demo-layout-appBar">
    <IconButton md={0}>
      <Icon style={{ color: '#fff', fontSize: 22 }} type="dehaze" />
    </IconButton>
    <Typography>
      <Icon type="tycheUI" style={{ fontSize: 32, marginRight: 12 }} />
      Tyche UI
    </Typography>
    <ToolBar>
      <Button shape="icon" href="https://github.com/buyou0821/tyche-ui" target="_blank">
        <Icon style={{ color: '#fff', fontSize: 24 }} type="github" />
      </Button>
    </ToolBar>
  </AppBar>
);
