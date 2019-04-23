import React from 'react';
import clsx from 'clsx';
import { tuple } from '../_until/type';
import { usePrefixCls } from '../_until/hooks';
import ButtonBase from '../ripple';

const ButtonTypes = tuple('contained', 'text', 'outlined', 'circle', 'round', 'icon');
type ButtonType = (typeof ButtonTypes)[number];
const ButtonColors = tuple('primary', 'secondary', 'success', 'warning', 'error');
type ButtonColor = (typeof ButtonColors)[number];

interface ButtonProps {
  type?: ButtonType;
  color?: ButtonColor;
  className?: string;
  children?: React.ReactNode;
  fab?: boolean;
  disabled?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { className, type = 'contained', color = 'default', disabled, fab, children } = props;
  const prefixCls = usePrefixCls('button');

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}__${type}`]: type,
    [`${prefixCls}_disabled`]: disabled,
    [`${prefixCls}__${type}--${color}`]: true,
    [`${prefixCls}--fab`]: fab,
  });

  return (
    <ButtonBase className={classes}>
      <span className={`${prefixCls}__wrapper`}>{children}</span>
    </ButtonBase>
  );
};

export default Button;
