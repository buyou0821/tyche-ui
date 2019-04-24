import React from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_until/hooks';
import { Omit, tuple } from '../_until/type';
import TouchRipple from './TouchRipple';
import Loading from './loading';
import './style';

const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

export interface BaseButtonProps extends React.DOMAttributes<HTMLElement> {
  children?: React.ReactNode;
  component?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  ripple?: boolean;
  center?: boolean;
}

export type AnchorButtonProps = {
  href?: string;
  target?: string;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type'>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const BaseButton: React.FunctionComponent<ButtonProps> = props => {
  const {
    component = 'button',
    href,
    children,
    className,
    disabled,
    loading,
    htmlType,
    ripple = true,
    center,
    ...rest
  } = props;
  const Component: any = href ? 'a' : component;
  const prefixRippleCls = usePrefixCls('ripple');
  const prefixButtonCls = usePrefixCls('btn');
  const buttonProps = {
    href,
    disabled: disabled || loading,
    type: htmlType,
  };
  const classes = clsx(prefixRippleCls, className, {
    [`${prefixButtonCls}_disabled`]: buttonProps.disabled,
  });
  return (
    <Component className={classes} {...buttonProps} {...rest}>
      {children}
      {ripple && !buttonProps.disabled && <TouchRipple center={center} />}
      {loading && <Loading />}
    </Component>
  );
};

export default BaseButton;
