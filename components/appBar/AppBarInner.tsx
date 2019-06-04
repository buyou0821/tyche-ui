import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_util/hooks';
import { Col, Button } from '../';
import { ColProps } from '../gird/Col';

interface IconButtonProps extends ColProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const IconButton = forwardRef(
  (props: IconButtonProps, ref: React.RefObject<HTMLDivElement>) => {
    const { className, children, ...rest } = props;
    const prefixCls = usePrefixCls('appbar');
    const classes = clsx(`${prefixCls}__icon`, className);

    return (
      <Col ref={ref} className={classes} {...rest}>
        <Button center shape="icon" className={`${prefixCls}__icon-btn`}>
          {children}
        </Button>
      </Col>
    );
  },
);

interface TypographyProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Typography = forwardRef(
  (props: TypographyProps, ref: React.RefObject<HTMLDivElement>) => {
    const { className, children, ...rest } = props;
    const prefixCls = usePrefixCls('appbar');
    const classes = clsx(`${prefixCls}__typography`, className);

    return (
      <div ref={ref} className={classes} {...rest}>
        {children}
      </div>
    );
  },
);

interface ToolBarProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const ToolBar = forwardRef((props: ToolBarProps, ref: React.RefObject<HTMLDivElement>) => {
  const { className, children, ...rest } = props;
  const prefixCls = usePrefixCls('appbar');
  const classes = clsx(`${prefixCls}__toolBar`, className);

  return (
    <div ref={ref} className={classes} {...rest}>
      {children}
    </div>
  );
});
