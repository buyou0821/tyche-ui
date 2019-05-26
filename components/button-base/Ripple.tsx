import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import clsx from 'clsx';
import { usePrefixCls } from '../_util/hooks';
import { RippleProps } from './TouchRipple';
import './style';

const DURATION = 500;

const Ripple = (props: RippleProps) => {
  const { rippleX, rippleY, rippleSize, ...restProps } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [leaving, setLeaving] = useState<boolean>(false);

  const handleEnter = () => {
    setVisible(true);
  };
  const handleExit = () => {
    setLeaving(true);
  };

  const prefixCls = usePrefixCls('ripple');

  const rippleClassName = clsx(`${prefixCls}__element`, {
    [`${prefixCls}_visible`]: visible,
  });

  const childClassName = clsx(`${prefixCls}__element--child`, {
    [`${prefixCls}_leaving`]: leaving,
  });

  return (
    <Transition
      {...restProps}
      onEnter={handleEnter}
      onExit={handleExit}
      timeout={{
        enter: DURATION,
        exit: DURATION,
      }}
    >
      <span
        className={rippleClassName}
        style={{
          width: rippleSize,
          height: rippleSize,
          top: rippleY - rippleSize / 2,
          left: rippleX - rippleSize / 2,
        }}
      >
        <span className={childClassName} />
      </span>
    </Transition>
  );
};

export default Ripple;
