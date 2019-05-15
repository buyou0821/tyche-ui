import React from 'react';
import { usePrefixCls } from '../_until/hooks';

interface ModalWrapperProps {
  mask?: boolean;
}

const ModalWrapper: React.FunctionComponent<ModalWrapperProps> = props => {
  const { mask, children } = props;
  const prefixCls = usePrefixCls('modal');

  return (
    <div className={`${prefixCls}__root`}>
      {mask && <div className={`${prefixCls}__mask`} />}
      <div className={`${prefixCls}__wrap`}>{children}</div>
    </div>
  );
};

export default ModalWrapper;
