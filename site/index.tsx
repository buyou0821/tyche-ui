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
      <Button />
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
