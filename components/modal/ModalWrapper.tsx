import React from 'react';

interface ModalWrapperProps {}

const ModalWrapper: React.FunctionComponent<ModalWrapperProps> = props => {
  return <div>{props.children}</div>;
};

export default ModalWrapper;
