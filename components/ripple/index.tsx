import React from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_until/hooks';
import TouchRipple from './TouchRipple';
import './style';

interface RippleProps extends React.DOMAttributes<HTMLElement> {
  children?: React.ReactNode;
  component?: string;
  className?: string;
}

const RippleComponent: React.FunctionComponent<RippleProps> = props => {
  const { component = 'button', children, className, ...rest } = props;
  const Component: any = component;
  const prefixCls = usePrefixCls('ripple');
  const classes = clsx(prefixCls, className);
  return (
    <Component className={classes} {...rest}>
      {children}
      <TouchRipple />
    </Component>
  );
};

export default RippleComponent;
