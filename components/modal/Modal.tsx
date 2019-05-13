import React, { forwardRef } from 'react';
import ModalWrapper from './ModalWrapper';

const Modal = forwardRef<React.FunctionComponent, any>((props, ref) => {
  return <ModalWrapper>modal wrapper</ModalWrapper>;
});

export default Modal;
