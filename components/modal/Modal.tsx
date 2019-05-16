import React from 'react';
import ModalWrapper from './ModalWrapper';
import ModalInner, { ModalInnerProps } from './ModalInner';
import { ModalWrapperProps } from './ModalWrapper';
import { Portal } from '../index';

type ModalProps = {
  visible: boolean;
  closeOnESC?: boolean;
} & ModalInnerProps &
  ModalWrapperProps;

const Modal: React.FunctionComponent<ModalProps> = props => {
  const { visible, mask, maskClosable, closeOnESC = true, ...reset } = props;
  const { onCancel } = props;
  const portalProps = {
    visible,
    closeOnESC,
    onCancel,
  };
  const wrapperProps: ModalWrapperProps = {
    mask,
    maskClosable,
    onCancel,
    visible,
  };
  return (
    <Portal {...portalProps}>
      <ModalWrapper {...wrapperProps}>
        <ModalInner {...reset}>{props.children}</ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
