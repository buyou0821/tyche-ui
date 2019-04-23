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
        <Button color="primary">PRIMARY</Button>
        <Button color="secondary">SECONDARY</Button>
        <Button color="success">SUCCESS</Button>
        <Button color="warning">WARNING</Button>
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
        <Button type="outlined" color="secondary">
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
        <h3>Circle Buttons</h3>
        <Button type="circle">
          <Icon material="face" />
        </Button>
        <Button type="circle" color="primary">
          <Icon material="remove" />
        </Button>
        <Button type="circle" color="secondary">
          <Icon material="create" />
        </Button>
        <Button type="circle" color="success">
          <Icon material="done" />
        </Button>
        <Button type="circle" color="warning">
          <Icon material="priority_high" />
        </Button>
        <Button type="circle" color="error">
          <Icon material="clear" />
        </Button>
      </div>
      <div className="demo-buttons">
        <h3>Round Buttons</h3>
        <Button type="round">DEFAULT</Button>
        <Button type="round" color="primary">
          PRIMARY
        </Button>
        <Button type="round" color="secondary">
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
