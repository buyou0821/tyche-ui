import React from 'react';
import TouchRipple from './TouchRipple';
import './style';

const Button = () => {
  return (
    <div className="wrapper" style={{ color: 'blue' }}>
      按钮
      <TouchRipple />
    </div>
  );
};

export default Button;
