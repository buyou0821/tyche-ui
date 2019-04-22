import React, { useContext } from 'react';
import clsx from 'clsx';
import { ConfigContext } from '../context/ConfigContext';
import ButtonBase from '../ripple';
import { tuple } from '../_until/type';

const ButtonTypes = tuple('default');
type ButtonType = (typeof ButtonTypes)[number];

interface ButtonProps {
  type?: ButtonType;
}

const Button: React.FunctionComponent<ButtonProps> = () => {
  const { getPrefixCls } = useContext(ConfigContext);

  const classes = clsx(getPrefixCls('button'));

  return <ButtonBase classes={classes}>button</ButtonBase>;
};

export default Button;
