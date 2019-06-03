import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { usePrefixCls } from '../_util/hooks';
import { TIMEOUT } from './Modal';

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
      {mask && (
        <CSSTransition in={visible} appear classNames={`${prefixCls}__mask`} timeout={TIMEOUT}>
          <div style={maskStyleObj} className={`${prefixCls}__mask`} />
        </CSSTransition>
      )}
      <div className={`${prefixCls}__wrap`} style={{ zIndex }} onClick={handleMaskClick}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
