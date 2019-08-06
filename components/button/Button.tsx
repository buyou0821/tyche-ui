import React from 'react';
import clsx from 'clsx';
import { tuple } from '../_util/type';
import { usePrefixCls } from '../_util/hooks';
import ButtonBase, { ButtonProps as BaseButtonProps } from '../button-base';

const ButtonShapes = tuple('contained', 'text', 'outlined', 'circle', 'round', 'icon');
export type ButtonShape = (typeof ButtonShapes)[number];
const ButtonColors = tuple('default', 'primary', 'secondary', 'success', 'warning', 'danger');
export type ButtonColor = (typeof ButtonColors)[number];
const ButtonSizes = tuple('large', 'default', 'small');
export type ButtonSize = (typeof ButtonSizes)[number];

export type ButtonProps = {
  shape?: ButtonShape;
  color?: ButtonColor;
  fab?: boolean;
  size?: ButtonSize;
} & BaseButtonProps;

const Button: React.FunctionComponent<ButtonProps> = props => {
  const {
    className,
    shape = 'contained',
    color = 'default',
    fab,
    size = 'default',
    children,
    ...rest
  } = props;
  const prefixCls = usePrefixCls('btn');

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}__${shape}`]: shape,
    [`${prefixCls}__${shape}--${color}`]: true,
    [`${prefixCls}--fab`]: fab,
    [`${prefixCls}--${size}`]: size && size !== 'default',
  });

  return (
    <ButtonBase className={classes} {...rest}>
      <span className={`${prefixCls}__wrapper`}>{children}</span>
    </ButtonBase>
  );
};

export default Button;
