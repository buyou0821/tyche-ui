import React from 'react';
import ModalWrapper from './ModalWrapper';
import ModalInner, { ModalInnerProps } from './ModalInner';
import { ModalWrapperProps } from './ModalWrapper';
import { Portal } from '../index';

type ModalProps = {
  visible: boolean;
} & ModalInnerProps &
  ModalWrapperProps;

const Modal: React.FunctionComponent<ModalProps> = props => {
  const { visible, mask, maskClosable, ...reset } = props;
  const { onClose } = props;
  const wrapperProps: ModalWrapperProps = { mask, maskClosable, onClose };
  return (
    <Portal visible={visible}>
      <ModalWrapper {...wrapperProps}>
        <ModalInner {...reset}>{props.children}</ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
