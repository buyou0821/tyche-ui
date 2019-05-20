import React, { useRef, useEffect } from 'react';
import { usePrefixCls } from '../_until/hooks';
import { Icon, Button } from '../index';
import { MousePosition } from './Modal';

export interface ModalInnerProps {
  width?: string | number;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  onCancel?: (e?: React.MouseEvent<any>) => void;
  mousePosition?: MousePosition;
}

const ModalInnter: React.FunctionComponent<ModalInnerProps> = props => {
  const { width = 520, title, footer, onCancel, mousePosition, children } = props;
  const prefixCls = usePrefixCls('modal');
  const style = { width };
  const modalInnerRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onCancel) {
      onCancel(e);
    }
  };

  useEffect(() => {
    resetTransformOrigin();
  }, [mousePosition]);

  const resetTransformOrigin = () => {
    if (
      mousePosition &&
      mousePosition.x >= 0 &&
      mousePosition.y >= 0 &&
      modalInnerRef.current &&
      modalInnerRef.current.getBoundingClientRect
    ) {
      const { left: x, top: y } = modalInnerRef.current.getBoundingClientRect();
      const origin = `${mousePosition.x - x}px ${mousePosition.y - y}px`;
      const modalInnerStyle = modalInnerRef.current.style;
      ['Webkit', 'Moz', 'Ms', 'ms'].forEach(prefix => {
        modalInnerStyle[`${prefix}TransformOrigin` as any] = origin;
      });
      modalInnerStyle.transformOrigin = origin;
    }
  };

  // header
  let Header;
  if (title) {
    Header = (
      <div className={`${prefixCls}__header`}>
        <div className={`${prefixCls}__title`}>
          {title}
          <Button shape="icon" className={`${prefixCls}__close`} onClick={handleClose}>
            <Icon type="clear" />
          </Button>
        </div>
      </div>
    );
  }

  // footer
  let Footer;
  const defaultFooter = (
    <div className={`${prefixCls}__footer`}>
      <Button shape="text" onClick={handleClose}>
        取 消
      </Button>
      <Button shape="text" color="primary">
        确 定
      </Button>
    </div>
  );
  Footer = footer === undefined ? defaultFooter : footer;

  return (
    <div ref={modalInnerRef} className={`${prefixCls}`} style={{ ...style }}>
      {Header}
      <div className={`${prefixCls}__body`}>{children}</div>
      {Footer}
    </div>
  );
};

export default ModalInnter;
