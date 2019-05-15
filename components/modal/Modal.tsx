import React from 'react';
import ModalWrapper from './ModalWrapper';
import ModalInner, { ModalProps } from './ModalInner';

const Modal: React.FunctionComponent<ModalProps> = props => {
  return (
    <ModalWrapper mask>
      <ModalInner {...props}>inner</ModalInner>
    </ModalWrapper>
  );
};

export default Modal;
