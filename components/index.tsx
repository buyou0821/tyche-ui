import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const IconFont = Icon.createFromIconfont({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

ReactDOM.render(
  <div>
    <IconFont type="icon-twitter" style={{ color: '#f66' }} />
  </div>,
  document.getElementById('root'),
);
