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
}

interface EventAttr {
  type: string;
  clientX: number;
  clientY: number;
}

const TouchRipple: React.FunctionComponent<TouchRippleProps> = React.memo(props => {
  const { center } = props;
  const [ripples, setRipples] = useState<Array<React.ReactElement>>([]);
  const [nextKey, setNextKey] = useState<number>(0);
  const [ignoringMousedown, setIgnoringMousedown] = useState<boolean>(false);
  const [startTimerCommit, setStartTimerCommit] = useState<Function | null>(null);
  const [startTimer, setStartTimer] = useState<number | null>(null);

  const container = React.createRef<HTMLDivElement>();

  const clacDiag = (a: number, b: number): number => {
    return Math.sqrt(a ** 2 + b ** 2);
  };

  const start = (event: EventAttr) => {
    if (event.type === 'mousedown' && ignoringMousedown) {
      setIgnoringMousedown(false);
      return;
    }

    if (event.type === 'touchstart') {
      setIgnoringMousedown(true);
    }

    const element = container.current;
    const rect = element
      ? element.getBoundingClientRect()
      : {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
        };

    let rippleX: number;
    let rippleY: number;
    let rippleSize: number;
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
      const deltaX = Math.abs(rect.width / 2 - rippleX) + rect.width / 2 + 2;
      const deltaY = Math.abs(rect.height / 2 - rippleY) + rect.height / 2 + 2;
      rippleSize = clacDiag(deltaX, deltaY) * 2;
    }
    setStartTimerCommit(() => startCommit({ rippleX, rippleY, rippleSize }));

    if (event.type === 'touchstart') {
      setStartTimer(
        window.setTimeout(() => {
          if (startTimerCommit) {
            startTimerCommit();
            setStartTimer(null);
          }
        }, 80),
      );
    } else {
      if (startTimerCommit) startTimerCommit();
    }
  };

  const end = (event: React.MouseEvent | React.TouchEvent) => {
    if (startTimer) clearTimeout(startTimer);

    if (event.type === 'touchend' && startTimerCommit) {
      event.persist();
      startTimerCommit();
      setStartTimerCommit(null);
      setStartTimer(
        setTimeout(() => {
          end(event);
        }),
      );
      return;
    }
    setStartTimerCommit(null);

    if (ripples.length === 0) return;
    setRipples(ripples.slice(1));
  };

  const startCommit = (rippleProps: RippleProps) => {
    setRipples([...ripples, <Ripple key={nextKey} {...rippleProps} />]);
    setNextKey(nextKey + 1);
  };

  const getFormatTouchEvent = (event: React.TouchEvent): EventAttr => {
    const { type } = event;
    const { clientX, clientY } = event.touches[0];

    return {
      type,
      clientX,
      clientY,
      ...event,
    };
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    start(getFormatTouchEvent(event));
  };

  return (
    <span
      className="touchRipple"
      ref={container}
      onMouseDown={start}
      onMouseUp={end}
      onMouseLeave={end}
      onTouchStart={handleTouchStart}
      onTouchEnd={end}
      onTouchMove={end}
    >
      <TransitionGroup component={null}>{ripples}</TransitionGroup>
    </span>
  );
});

export default TouchRipple;
