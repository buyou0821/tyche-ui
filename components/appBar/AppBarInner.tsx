import React, { forwardRef } from 'react';
import { usePrefixCls } from '../_util/hooks';
import { Col, Button } from '../';

interface IconButtonProps {
  children?: React.ReactNode;
}

export const IconButton = forwardRef(
  (props: IconButtonProps, ref: React.RefObject<HTMLDivElement>) => {
    const { children } = props;
    const prefixCls = usePrefixCls('appbar');

    return (
      <Col md={0} ref={ref} className={`${prefixCls}__icon`}>
        <Button shape="icon">{children}</Button>
      </Col>
    );
  },
);

interface TitleProps {
  children?: React.ReactNode;
}

export const Typography = forwardRef((props: TitleProps, ref: React.RefObject<HTMLDivElement>) => {
  const { children } = props;
  const prefixCls = usePrefixCls('appbar');

  return (
    <div ref={ref} className={`${prefixCls}__typography`}>
      {children}
    </div>
  );
});

interface ToolBarProps {
  children?: React.ReactNode;
}

export const ToolBar = forwardRef((props: ToolBarProps, ref: React.RefObject<HTMLDivElement>) => {
  const { children } = props;
  const prefixCls = usePrefixCls('appbar');

  return (
    <div ref={ref} className={`${prefixCls}__toolBar`}>
      {children}
    </div>
  );
});
