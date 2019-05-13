import React from 'react';

interface ModalWrapperProps {}

const ModalWrapper = React.forwardRef<React.FunctionComponent, ModalWrapperProps>((props, ref) => {
  return <div>{props.children}</div>;
});

export default ModalWrapper;
