import React from 'react';
import clsx from 'clsx';
import { tuple } from '../_until/type';
import { usePrefixCls } from '../_until/hooks';
import ButtonBase, { BaseButtonProps } from '../button-base';

const ButtonTypes = tuple('contained', 'text', 'outlined', 'circle', 'round', 'icon');
type ButtonType = (typeof ButtonTypes)[number];
const ButtonColors = tuple('primary', 'secondary', 'success', 'warning', 'error');
type ButtonColor = (typeof ButtonColors)[number];

type ButtonProps = {
  type?: ButtonType;
  color?: ButtonColor;
  fab?: boolean;
} & BaseButtonProps;

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { className, type = 'contained', color = 'default', fab, children, ...rest } = props;
  const prefixCls = usePrefixCls('button');

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}__${type}`]: type,
    [`${prefixCls}__${type}--${color}`]: true,
    [`${prefixCls}--fab`]: fab,
  });

  return (
    <ButtonBase className={classes} {...rest}>
      <span className={`${prefixCls}__wrapper`}>{children}</span>
    </ButtonBase>
  );
};

export default Button;
