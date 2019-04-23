import React from 'react';
import clsx from 'clsx';
import { tuple } from '../_until/type';
import { usePrefixCls } from '../_until/hooks';
import ButtonBase from '../ripple';

const ButtonTypes = tuple('contained', 'text', 'outlined', 'circle', 'round');
type ButtonType = (typeof ButtonTypes)[number];
const ButtonColors = tuple('primary', 'secondary', 'success', 'warning', 'error');
type ButtonColor = (typeof ButtonColors)[number];

interface ButtonProps {
  type?: ButtonType;
  color?: ButtonColor;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { type = 'contained', color = 'default', children, className } = props;
  const prefixCls = usePrefixCls('button');

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}__${type}`]: type,
    [`${prefixCls}__${type}--${color}`]: true,
  });

  return <ButtonBase className={classes}>{children}</ButtonBase>;
};

export default Button;
