import React, { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Ripple from './Ripple';
import './style';

interface TouchRippleProps {
  center?: boolean;
}

export interface RippleProps {
  rippleX: number;
  rippleY: number;
  rippleSize: number;
  classNames?: string;
  in?: boolean;
}

const TouchRipple: React.FunctionComponent<TouchRippleProps> = React.memo(props => {
  const { center } = props;
  const [ripples, setRipples] = useState<Array<React.ReactElement>>([]);
  const [nextKey, setNextKey] = useState<number>(0);

  const container = React.createRef<HTMLDivElement>();

  const clacDiag = (a: number, b: number): number => {
    return Math.sqrt(a ** 2 + b ** 2);
  };

  const start = (event: React.MouseEvent) => {
    // console.log(event.type);

    const element = container.current;
    const rect = element
      ? element.getBoundingClientRect()
      : {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
        };

    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || (event.clientX === 0 && event.clientY === 0) || !event.clientX) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      rippleX = Math.round(event.clientX - rect.left);
      rippleY = Math.round(event.clientY - rect.top);
    }

    if (center) {
      rippleSize = clacDiag(rect.width, rect.height);
    } else {
      // 距离元素中心点的距离+元素长度的一半
      const deltaX = Math.abs(rect.width / 2 - rippleX) + rect.width / 2 + 2;
      const deltaY = Math.abs(rect.height / 2 - rippleY) + rect.height / 2 + 2;
      rippleSize = clacDiag(deltaX, deltaY) * 2;
    }

    startCommit({ rippleX, rippleY, rippleSize });
  };

  const end = () => {
    if (ripples.length === 0) return;
    setRipples([]);
  };

  const startCommit = (rippleProps: RippleProps) => {
    setRipples([...ripples, <Ripple key={nextKey} {...rippleProps} />]);
    setNextKey(nextKey + 1);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    start(event);
  };

  // const handleTouchStart = (event: React.TouchEvent) => {
  //   console.log(event.touches[0]);
  // };

  return (
    <div
      className="touchRipple"
      ref={container}
      onMouseDown={handleMouseDown}
      onMouseUp={end}
      // onTouchStart={handleTouchStart}
    >
      <TransitionGroup component={null}>{ripples}</TransitionGroup>
    </div>
  );
});

export default TouchRipple;
