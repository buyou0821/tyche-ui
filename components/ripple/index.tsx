import React from 'react';
import TouchRipple from './TouchRipple';
import './style';

const Button = () => {
  return (
    <div className="wrapper" style={{ color: '#2196f3' }}>
      按钮
      <TouchRipple />
    </div>
  );
};

export default Button;
