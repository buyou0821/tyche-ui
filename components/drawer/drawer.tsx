import React, { forwardRef, useState, useRef, useLayoutEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { usePrefixCls } from '../_util/hooks';
import { duration } from '../_util/transition';
import Portal from '../portal';
import Sider, { SiderProps } from './Sider';
import { useForkRef } from '../_util/reactHelpers';

export interface DrawerProps extends Partial<SiderProps> {
  visible?: boolean;
  mask?: boolean;
  onClose?: (e: React.MouseEvent) => void;
}

const Drawer = forwardRef((props: DrawerProps, ref: React.RefObject<HTMLDivElement>) => {
  const { visible = false, width, onClose, mask = true, children, ...rest } = props;
  const prefixCls = usePrefixCls('drawer');
  const [prevVisible, setPrevVisible] = useState<boolean>(false);
  const [exciting, setExciting] = useState<boolean>(false);
  const maskNode = useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(maskNode, ref);

  const removeMoveHandler = (e: React.TouchEvent | TouchEvent) => {
    e.preventDefault();
  };

  useLayoutEffect(() => {
    if (maskNode && maskNode.current) {
      maskNode.current.addEventListener('touchmove', removeMoveHandler, { passive: false });
    }
    return () => {
      if (maskNode && maskNode.current) {
        maskNode.current.removeEventListener('touchmove', removeMoveHandler);
      }
    };
  }, [visible]);

  if (visible !== prevVisible) {
    if (prevVisible && !visible) {
      setExciting(true);
    }
    setPrevVisible(visible);
  }

  const handleMaskClick = (e: React.MouseEvent) => {
    if (onClose) {
      onClose(e);
    }
  };

  const onMaskExited = () => {
    setExciting(false);
  };

  return (
    <Portal className={prefixCls} visible={visible || exciting}>
      {mask && (
        <CSSTransition
          in={visible}
          timeout={{
            enter: duration.enteringScreen,
            exit: duration.leavingScreen,
          }}
          appear
          onExited={onMaskExited}
          unmountOnExit
          classNames={`${prefixCls}__mask`}
        >
          <div ref={handleRef} className={`${prefixCls}__mask`} onClick={handleMaskClick} />
        </CSSTransition>
      )}
      <Sider width={width} inProp={visible} {...rest}>
        {children}
      </Sider>
    </Portal>
  );
});
export default Drawer;
