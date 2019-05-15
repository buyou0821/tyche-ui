import React from 'react';
import { usePrefixCls } from '../_until/hooks';

export interface ModalWrapperProps {
  mask?: boolean;
  maskClosable?: boolean;
  onClose?: (e: React.MouseEvent<any>) => void;
}

const ModalWrapper: React.FunctionComponent<ModalWrapperProps> = props => {
  const { mask = true, maskClosable = true, onClose, children } = props;
  const prefixCls = usePrefixCls('modal');

  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && mask && maskClosable) {
      if (onClose) {
        onClose(e);
      }
    }
  };

  return (
    <div className={`${prefixCls}__root`}>
      {mask && <div className={`${prefixCls}__mask`} />}
      <div className={`${prefixCls}__wrap`} onClick={handleMaskClick}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
