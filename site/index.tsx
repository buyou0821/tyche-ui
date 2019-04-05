import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Icon } from 'components/index';
import './style';

const IconWrapper = () => {
  const IconFont = Icon.createFromIconfont({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
  return (
    <div>
      <Icon type="loading" style={{ color: '#299' }} />
      <Icon material="face" style={{ color: '#f66' }} rotate={90}>
        face
      </Icon>
      <Icon material="face" rotate={90}>
        face
      </Icon>
      <IconFont type="icon-twitter" spin />
      <IconFont type="icon-tuichu" rotate={90} />
    </div>
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
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconWrapper} />
        </main>
      </div>
    </div>
  </Router>,
  document.getElementById('root'),
);
