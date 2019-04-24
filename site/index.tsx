import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Icon, Button, ConfigProvider } from 'components/index';
import './style';

const IconWrapper = () => {
  const IconFont = Icon.createFromIconfont({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
  return (
    <div>
      <Icon type="loading" style={{ color: '#1890ff' }} />
      <Icon material="face" style={{ color: '#f66' }} rotate={90} />
      <Icon material="face" rotate={90} />
      <IconFont type="icon-twitter" spin />
      <IconFont type="icon-tuichu" rotate={90} />
    </div>
  );
};

const ButtonWrapper = () => {
  return (
    <ConfigProvider>
      <div className="demo-buttons">
        <h3>Contained Buttons</h3>
        <Button>DEFAULT</Button>
        <Button loading onClick={() => console.log('onClick')} color="primary">
          PRIMARY
        </Button>
        <Button color="secondary" disabled>
          SECONDARY
        </Button>
        <Button component="a" href="http://www.baidu.com" target="_blank" color="success">
          百度
        </Button>
        <Button htmlType="submit" color="warning" ripple={false}>
          WARNING
        </Button>
        <Button color="error">ERROR</Button>
      </div>
      <div className="demo-buttons">
        <h3>Text Buttons</h3>
        <Button type="text">DEFAULT</Button>
        <Button type="text" color="primary">
          PRIMARY
        </Button>
        <Button type="text" color="secondary">
          SECONDARY
        </Button>
        <Button type="text" color="success">
          SUCCESS
        </Button>
        <Button type="text" color="warning">
          WARNING
        </Button>
        <Button type="text" color="error">
          ERROR
        </Button>
      </div>
      <div className="demo-buttons">
        <h3>Outlined Buttons</h3>
        <Button type="outlined">DEFAULT</Button>
        <Button type="outlined" color="primary">
          PRIMARY
        </Button>
        <Button type="outlined" color="secondary" disabled>
          SECONDARY
        </Button>
        <Button type="outlined" color="success">
          SUCCESS
        </Button>
        <Button type="outlined" color="warning">
          WARNING
        </Button>
        <Button type="outlined" color="error">
          ERROR
        </Button>
      </div>
      <div className="demo-buttons">
        <h3>Circle/Fab Buttons</h3>
        <Button type="circle">
          <Icon material="face" />
        </Button>
        <Button type="circle" loading color="primary">
          <Icon material="remove" />
        </Button>
        <Button type="circle" color="secondary" disabled>
          <Icon material="create" />
        </Button>
        <Button type="circle" color="success" fab>
          <Icon material="done" />
        </Button>
        <Button type="circle" color="warning" fab loading>
          <Icon material="priority_high" />
        </Button>
        <Button type="circle" color="error" fab disabled>
          <Icon material="clear" />
        </Button>
      </div>
      <div className="demo-buttons">
        <h3>Round Buttons</h3>
        <Button type="round">DEFAULT</Button>
        <Button type="round" color="primary">
          PRIMARY
        </Button>
        <Button type="round" color="secondary" disabled>
          SECONDARY
        </Button>
        <Button type="round" color="success">
          SUCCESS
        </Button>
        <Button type="round" color="warning">
          WARNING
        </Button>
        <Button type="round" color="error">
          ERROR
        </Button>
      </div>
      <div className="demo-buttons">
        <h3>Icon Buttons</h3>
        <Button type="icon">
          <Icon material="face" />
        </Button>
        <Button type="icon" color="primary">
          <Icon material="remove" />
        </Button>
        <Button type="icon" color="secondary" disabled>
          <Icon material="create" />
        </Button>
        <Button type="icon" color="success">
          <Icon material="done" />
        </Button>
        <Button type="icon" color="warning">
          <Icon material="priority_high" />
        </Button>
        <Button type="icon" color="error">
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
        <Button color="error" type="circle" size="small">
          <Icon material="warning" />
        </Button>
        <Button color="warning" type="circle">
          <Icon material="warning" />
        </Button>
        <Button color="error" type="circle" size="large">
          <Icon material="warning" />
        </Button>
      </div>
    </ConfigProvider>
  );
};

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">Tyche UI</div>
      </header>
      <div className="tyche-wrapper">
        <aside>
          <h2>components</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">button</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconWrapper} />
          <Route path="/button" component={ButtonWrapper} />
        </main>
      </div>
    </div>
  </Router>,
  document.getElementById('root'),
);
