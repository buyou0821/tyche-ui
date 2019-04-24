import React from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_until/hooks';
import { Omit, tuple } from '../_until/type';
import TouchRipple from './TouchRipple';
import './style';

const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

interface BaseButtonProps {
  children?: React.ReactNode;
  component?: string;
  className?: string;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type'>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const BaseButton: React.FunctionComponent<ButtonProps> = props => {
  const { component = 'button', children, className, disabled, ...rest } = props;
  const Component: any = component;
  const prefixCls = usePrefixCls('ripple');
  const classes = clsx(prefixCls, className);
  return (
    <Component className={classes} disabled={disabled} {...rest}>
      {children}
      {!disabled && <TouchRipple />}
    </Component>
  );
};

export default BaseButton;
