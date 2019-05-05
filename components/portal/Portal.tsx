import React, { forwardRef, useLayoutEffect } from 'react';
import { PurePortal, PurePortalProps } from './PurePortal';

type PortalProps = {
} & PurePortalProps;

interface PortalComponent<p> extends React.ForwardRefExoticComponent<p> {
  PurePortal: typeof PurePortal;
}

const Portal = forwardRef<PortalComponent<PortalProps>, PortalProps>((props, ref) => {
  const { children, ...rest } = props;

  useLayoutEffect(() => {
    console.log(22);
  }, []);

  return <PurePortal {...rest}>{children}</PurePortal>;
}) as PortalComponent<PortalProps>;

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
