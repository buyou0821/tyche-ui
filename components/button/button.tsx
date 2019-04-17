import React, { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';

const Button = () => {
  const context = useContext(ConfigContext);
  console.log(context.getPrefixCls('button'));
  return <button>123</button>;
};

export default Button;
