import React from 'react';
import { Icon, Button, ConfigProvider } from 'components/index';

export default () => {
  return (
    <ConfigProvider>
      <div className="demo-buttons">
        <h3>Contained Buttons</h3>
        <Button>DEFAULT</Button>
        <Button loading color="primary">
          PRIMARY
        </Button>
        <Button color="secondary" disabled>
          SECONDARY
        </Button>
        <Button href="https://github.com/buyou0821/tyche-ui" target="_blank" color="success">
          Tyche UI
        </Button>
        <Button htmlType="submit" color="warning" ripple={false}>
          WARNING
        </Button>
        <Button color="error">ERROR</Button>
      </div>
      <div className="demo-buttons">
        <h3>Text Buttons</h3>
        <Button shape="text">DEFAULT</Button>
        <Button shape="text" color="primary" center>
          <Icon left material="create" />
          PRIMARY
        </Button>
        <Button shape="text" color="secondary">
          SECONDARY
        </Button>
        <Button shape="text" color="success">
          SUCCESS
        </Button>
        <Button shape="text" color="warning">
          WARNING
        </Button>
        <Button shape="text" color="error">
          ERROR
        </Button>
      </div>
      <div className="demo-buttons">
        <h3>Outlined Buttons</h3>
        <Button shape="outlined">DEFAULT</Button>
        <Button shape="outlined" color="primary">
          PRIMARY
        </Button>
        <Button shape="outlined" color="secondary" disabled>
          SECONDARY
        </Button>
        <Button shape="outlined" color="success">
          SUCCESS
        </Button>
        <Button shape="outlined" color="warning">
          WARNING
        </Button>
        <Button shape="outlined" color="error">
          ERROR
        </Button>
      </div>
      <div className="demo-buttons">
        <h3>Circle/Fab Buttons</h3>
        <Button shape="circle">
          <Icon material="face" />
        </Button>
        <Button shape="circle" loading color="primary">
          <Icon material="remove" />
        </Button>
        <Button shape="circle" color="secondary" disabled>
          <Icon material="create" />
        </Button>
        <Button shape="circle" color="success" fab>
          <Icon material="done" />
        </Button>
        <Button shape="circle" color="warning" fab loading>
          <Icon material="priority_high" />
        </Button>
        <Button shape="circle" color="error" fab disabled>
          <Icon material="clear" />
        </Button>
      </div>
      <div className="demo-buttons">
        <h3>Round Buttons</h3>
        <Button shape="round">DEFAULT</Button>
        <Button shape="round" color="primary">
          PRIMARY
        </Button>
        <Button shape="round" color="secondary" disabled>
          SECONDARY
        </Button>
        <Button shape="round" color="success">
          SUCCESS
        </Button>
        <Button shape="round" color="warning">
          WARNING
        </Button>
        <Button shape="round" color="error">
          ERROR
        </Button>
      </div>
      <div className="demo-buttons">
        <h3>Icon Buttons</h3>
        <Button shape="icon">
          <Icon material="face" />
        </Button>
        <Button shape="icon" color="primary">
          <Icon material="remove" />
        </Button>
        <Button shape="icon" color="secondary" disabled>
          <Icon material="create" />
        </Button>
        <Button shape="icon" color="success" size="small">
          <Icon material="done" />
        </Button>
        <Button shape="icon" color="warning">
          <Icon material="priority_high" />
        </Button>
        <Button shape="icon" color="error" size="large">
          <Icon material="clear" />
        </Button>
      </div>
      <div className="demo-buttons">
        <h3>Icon Buttons</h3>
        <Button color="primary">
          <Icon left material="delete" />
          删除
        </Button>
        <Button color="secondary" disabled>
          <Icon left material="create" />
          添加
        </Button>
        <Button color="success">
          成功
          <Icon right material="done" />
        </Button>
        <Button color="warning">
          警告
          <Icon right material="warning" />
        </Button>
        <Button color="error">
          <Icon left material="send" />
          SEND
        </Button>
      </div>
      <div className="demo-buttons">
        <h3>Size</h3>
        <Button color="primary" size="small">
          <Icon left material="delete" />
          删除
        </Button>
        <Button color="secondary">
          <Icon left material="create" />
          添加
        </Button>
        <Button color="success" size="large">
          成功
          <Icon right material="done" />
        </Button>
        <Button color="error" shape="circle" size="small">
          <Icon material="warning" />
        </Button>
        <Button color="warning" shape="circle">
          <Icon material="warning" />
        </Button>
        <Button color="error" shape="circle" size="large">
          <Icon material="warning" />
        </Button>
      </div>
    </ConfigProvider>
  );
};
