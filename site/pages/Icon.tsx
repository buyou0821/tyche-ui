import React from 'react';
import { Icon } from 'components/index';

export default () => {
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
