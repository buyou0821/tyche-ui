import React, { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';
import clsx from 'clsx';
import TouchRipple from './TouchRipple';
import './style';

interface RippleProps extends React.DOMAttributes<HTMLElement> {
  children?: React.ReactNode;
  component?: string;
  classes?: string;
}

const RippleComponent: React.FunctionComponent<RippleProps> = props => {
  const { classes: classNameProp } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const { component = 'button', children, ...rest } = props;
  const Component: any = component;
  const prefixCls = getPrefixCls('ripple');
  console.log(prefixCls, classNameProp);
  const classes = clsx(prefixCls, classNameProp);
  console.log('@', prefixCls);
  return (
    <Component className={classes} {...rest} style={{ color: 'blue' }}>
      {children}
      <TouchRipple />
    </Component>
  );
};

export default RippleComponent;
