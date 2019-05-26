import React from 'react';
import { usePrefixCls } from '../_util/hooks';

export interface ModalWrapperProps {
  visible?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  onCancel?: (e: React.MouseEvent<any>) => void;
}

const ModalWrapper: React.FunctionComponent<ModalWrapperProps> = props => {
  const { mask = true, maskClosable = true, onCancel, visible, children } = props;
  const prefixCls = usePrefixCls('modal');

  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && mask && maskClosable) {
      if (onCancel) {
        onCancel(e);
      }
    }
  };

  return (
    <div className={`${prefixCls}__root`}>
      {visible && mask && <div className={`${prefixCls}__mask`} />}
      <div className={`${prefixCls}__wrap`} onClick={handleMaskClick}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
