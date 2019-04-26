import React from 'react';
import PurePortal from './PurePortal';

type PortalProps = {
  children?: React.ReactNode;
  selector?: string;
};

interface PortalComponent<p> extends React.FunctionComponent<p> {
  PurePortal: typeof PurePortal;
}

const Portal: PortalComponent<PortalProps> = props => {
  const { children, ...rest } = props;

  return <PurePortal {...rest}>{children}</PurePortal>;
};

Portal.PurePortal = PurePortal;

export default Portal;
