import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_util/hooks';
import { Icon, Button } from '../index';
import { MousePosition } from './Modal';
import { ButtonShape, ButtonColor } from '../button';

export interface ModalInnerProps {
  width?: string | number;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  onCancel?: (e?: React.MouseEvent<any>) => void;
  onOk?: (e?: React.MouseEvent<any>) => void;
  mousePosition?: MousePosition;
  className?: string;
  bodyStyle?: React.CSSProperties;
  okShape?: ButtonShape;
  cancelShape?: ButtonShape;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  okColor?: ButtonColor;
  cancelColor?: ButtonColor;
  closable?: boolean;
  style?: React.CSSProperties;
}

const ModalInnter: React.FunctionComponent<ModalInnerProps> = props => {
  const {
    width = 520,
    title,
    footer,
    onCancel,
    onOk,
    mousePosition,
    bodyStyle,
    className,
    children,
    okShape = 'text',
    cancelShape = 'text',
    okText = '确 认',
    cancelText = '取 消',
    okColor = 'primary',
    cancelColor,
    closable = true,
    style,
  } = props;
  const prefixCls = usePrefixCls('modal');
  const modalInnerRef = useRef<HTMLDivElement>(null);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onCancel) {
      onCancel(e);
    }
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onOk) {
      onOk(e);
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
          {closable && (
            <Button shape="icon" className={`${prefixCls}__close`} onClick={handleCancel}>
              <Icon type="clear" />
            </Button>
          )}
        </div>
      </div>
    );
  }

  // footer
  let Footer;
  const defaultFooter = (
    <>
      <Button shape={cancelShape} color={cancelColor} onClick={handleCancel}>
        {cancelText}
      </Button>
      <Button shape={okShape} color={okColor} onClick={handleOk}>
        {okText}
      </Button>
    </>
  );

  Footer = footer !== null && (
    <div className={`${prefixCls}__footer`}>{footer === undefined ? defaultFooter : footer}</div>
  );

  const classes = clsx(`${prefixCls}__body`, className);

  const modalStyle = { width, ...style };

  return (
    <div ref={modalInnerRef} className={`${prefixCls}`} style={modalStyle}>
      {Header}
      <div className={classes} style={bodyStyle}>
        {children}
      </div>
      {Footer}
    </div>
  );
};

export default ModalInnter;
