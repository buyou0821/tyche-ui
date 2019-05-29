import React from 'react';
import { usePrefixCls } from '../_util/hooks';

export interface ModalWrapperProps {
  visible?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  onCancel?: (e: React.MouseEvent<any>) => void;
  zIndex?: number;
  maskStyle?: React.CSSProperties;
}

const ModalWrapper: React.FunctionComponent<ModalWrapperProps> = props => {
  const {
    mask = true,
    maskClosable = true,
    onCancel,
    zIndex,
    visible,
    maskStyle,
    children,
  } = props;
  const prefixCls = usePrefixCls('modal');

  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && mask && maskClosable) {
      if (onCancel) {
        onCancel(e);
      }
    }
  };

  const maskStyleObj = {
    ...maskStyle,
    zIndex,
  };

  return (
    <div className={`${prefixCls}__root`}>
      {visible && mask && <div style={maskStyleObj} className={`${prefixCls}__mask`} />}
      <div className={`${prefixCls}__wrap`} style={{ zIndex }} onClick={handleMaskClick}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
