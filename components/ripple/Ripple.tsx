import React, { useState } from 'react';
import clsx from 'clsx';
import { Transition } from 'react-transition-group';
import { RippleProps } from './TouchRipple';
import './style';

const DURATION = 550;

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

  const rippleClassName = clsx({
    [`ripple`]: true,
    [`rippleVisible`]: visible,
  });

  const childClassName = clsx({
    [`ripple-child`]: true,
    [`childLeaving`]: leaving,
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
          top: -(rippleSize / 2) + rippleY,
          left: -(rippleSize / 2) + rippleX,
        }}
      >
        <span className={childClassName} />
      </span>
    </Transition>
  );
};

export default Ripple;
