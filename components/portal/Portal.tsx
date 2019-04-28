import React, { forwardRef } from 'react';
import { PurePortal } from './PurePortal';

type PortalProps = {
  children?: React.ReactNode;
  selector?: string;
};

interface PortalComponent<p> extends React.ForwardRefExoticComponent<p> {
  PurePortal: typeof PurePortal;
}

const Portal: any = forwardRef<PortalComponent<PortalProps>, PortalProps>((props, ref) => {
  const { children, ...rest } = props;

  return <PurePortal {...rest}>{children}</PurePortal>;
});

// const Portal = forwardRef<React.ComponentPropsWithRef<PortalComponent<PortalProps>>, PortalProps>((props, ref) => {
//   const { children, ...rest } = props;

//   return <PurePortal {...rest}>{children}</PurePortal>;
// });

// const Portal: React.ForwardRefExoticComponent<PortalProps> & {
//   PurePortal: typeof PurePortal;
// } = forwardRef((props, ref) => {
//   const { children, selector, ...rest } = props;

//   return <PurePortal {...rest}>{children}</PurePortal>;
// });

Portal.PurePortal = PurePortal;

export default Portal;
