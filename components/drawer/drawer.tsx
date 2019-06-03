import React, { forwardRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { usePrefixCls } from '../_util/hooks';
import { duration } from '../_util/transition';
import Portal from '../portal';

interface DrawerProps {
  visible: boolean;
  onClose?: (e: React.MouseEvent) => void;
}

const Drawer = forwardRef((props: DrawerProps, ref: React.RefObject<HTMLDivElement>) => {
  const { visible, onClose } = props;
  const prefixCls = usePrefixCls('drawer');
  const [prevVisible, setPrevVisible] = useState<boolean>(false);
  const [exciting, setExciting] = useState<boolean>(false);

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

  const handleMaskExited = () => {
    setExciting(false);
  };

  return (
    <Portal visible={visible || exciting}>
      <CSSTransition
        in={visible}
        timeout={{
          enter: duration.enteringScreen,
          exit: duration.leavingScreen,
        }}
        appear
        onExited={handleMaskExited}
        unmountOnExit
        classNames={`${prefixCls}__mask`}
      >
        <div ref={ref} className={`${prefixCls}__mask`} onClick={handleMaskClick}>
          mask
        </div>
      </CSSTransition>
    </Portal>
  );
});
export default Drawer;
