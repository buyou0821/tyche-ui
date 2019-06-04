import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { tuple } from '../_util/type';
import { Transition } from 'react-transition-group';
import { usePrefixCls } from '../_util/hooks';
import { duration } from '../_util/transition';

const SiderPlacements = tuple('left', 'right', 'top', 'bottom');
export type SiderPlacement = (typeof SiderPlacements)[number];

export interface SiderProps {
  className?: string;
  placement?: SiderPlacement;
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  inProp?: boolean;
}

const getTranslateValue = (placement: SiderPlacement): string => {
  if (['left', 'right'].includes(placement)) {
    return `translateX(${placement === 'left' ? -100 : 100}%)`;
  }
  return `translateY(${placement === 'top' ? -100 : 100}%)`;
};

const setTranslateValue = (placement: SiderPlacement, node: HTMLElement) => {
  const transform = getTranslateValue(placement);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
};

const Sider = forwardRef((props: SiderProps, ref: React.RefObject<HTMLDivElement>) => {
  const {
    inProp,
    children,
    width = 256,
    height = 256,
    placement = 'left',
    style,
    className,
    ...rest
  } = props;
  const prefixCls = usePrefixCls('drawer');
  const siderRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => siderRef.current as HTMLDivElement);

  const siderStyle: React.CSSProperties = { ...style };
  if (['left', 'right'].includes(placement)) {
    siderStyle.width = width;
  } else {
    siderStyle.height = height;
  }

  const onEnter = () => {
    const node = siderRef.current;
    if (node) {
      setTranslateValue(placement, node);
      node.style.transition = `transform ${duration.enteringScreen}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    }
  };

  const onEntering = () => {
    const node = siderRef.current;
    if (node) {
      node.style.webkitTransform = 'translate(0, 0)';
      node.style.transform = 'translate(0, 0)';
    }
  };

  const onExited = () => {
    const node = siderRef.current;
    if (node) {
      setTranslateValue(placement, node);
      node.style.transition = `transform ${duration.leavingScreen}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    }
  };

  const classes = clsx(
    `${prefixCls}__sider`,
    {
      [`${prefixCls}__sider--${placement}`]: placement,
    },
    className,
  );

  return (
    <Transition
      onEnter={onEnter}
      onEntering={onEntering}
      onExit={onExited}
      in={inProp}
      appear
      timeout={{
        enter: duration.enteringScreen,
        exit: duration.leavingScreen,
      }}
    >
      <div className={classes} ref={siderRef} style={siderStyle} {...rest}>
        {children}
      </div>
    </Transition>
  );
});

export default Sider;
