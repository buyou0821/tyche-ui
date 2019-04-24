import React from 'react';
import { usePrefixCls } from '../_until/hooks';
import { Icon } from '../index';

const Loading: React.FunctionComponent = () => {
  const prefixCls = usePrefixCls('btn');

  return (
    <span className={`${prefixCls}__loading`}>
      <Icon type="loading" />
    </span>
  );
};

export default Loading;
