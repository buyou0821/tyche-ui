import React, { forwardRef } from 'react';

interface ModalWrapperProps {
  children?: React.ReactNode;
}

const ModalWrapper = forwardRef((props: ModalWrapperProps, ref: React.Ref<HTMLDivElement>) => {
  return <div ref={ref}>{props.children}</div>;
});

export default ModalWrapper;
