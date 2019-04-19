import React, { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';
import clsx from 'clsx';
import TouchRipple from './TouchRipple';
import './style';

interface RippleProps extends React.DOMAttributes<HTMLElement> {
  children?: React.ReactNode;
  component?: string;
  className?: string;
}

const RippleComponent: React.FunctionComponent<RippleProps> = props => {
  const { className } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const { component = 'button', children, ...rest } = props;
  const Component: any = component;
  const prefixCls = getPrefixCls('ripple');
  const classes = clsx(prefixCls, className);
  return (
    <Component className={classes} {...rest} style={{ color: 'blue' }}>
      {children}
      <TouchRipple />
    </Component>
  );
};

export default RippleComponent;
