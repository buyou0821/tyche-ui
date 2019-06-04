import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { tuple } from '../_util/type';
import { usePrefixCls } from '../_util/hooks';
import { IconButton, Typography, ToolBar } from './AppBarInner';

const AppBarColors = tuple('primary', 'secondary', 'success', 'warning', 'danger');
export type AppBarColor = (typeof AppBarColors)[number];

interface AppBarProps {
  className?: string;
  children?: React.ReactNode;
  color?: AppBarColor;
  style?: React.CSSProperties;
}

interface AppBarComponent<p> extends React.ForwardRefExoticComponent<p> {
  IconButton: typeof IconButton;
  Typography: typeof Typography;
  ToolBar: typeof ToolBar;
}

const AppBar = forwardRef((props: AppBarProps, ref: React.RefObject<HTMLDivElement>) => {
  const { color = 'default', className, children, ...rest } = props;
  const prefixCls = usePrefixCls('appbar');

  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--${color}`]: color,
  });

  return (
    <div ref={ref} className={classes} {...rest}>
      {children}
    </div>
  );
}) as AppBarComponent<AppBarProps>;

AppBar.IconButton = IconButton;
AppBar.Typography = Typography;
AppBar.ToolBar = ToolBar;

export default AppBar;
