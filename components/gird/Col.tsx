import React, { forwardRef, useContext } from 'react';
import RowContext from './RowContext';
import { usePrefixCls } from '../_util/hooks';
import clsx from 'clsx';

type ColSpanType = number | string;

interface ColSize {
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
  order?: ColSpanType;
  xs?: ColSpanType | ColSize;
  sm?: ColSpanType | ColSize;
  md?: ColSpanType | ColSize;
  lg?: ColSpanType | ColSize;
  xl?: ColSpanType | ColSize;
  xxl?: ColSpanType | ColSize;
}

const Col = forwardRef((props: ColProps, ref: React.RefObject<HTMLDivElement>) => {
  const { gutter } = useContext(RowContext);
  const { className, span, offset, push, pull, order, style, children, ...rest } = props;
  const prefixCls = usePrefixCls('col');

  const colStyle =
    gutter! > 0
      ? {
          paddingLeft: gutter! / 2,
          paddingRight: gutter! / 2,
          ...style,
        }
      : style;

  let sizeClassNames = {};
  ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
    let sizeProps: ColProps = {};
    if (typeof props[size] === 'number') {
      sizeProps.span = props[size];
    } else if (typeof props[size] === 'object') {
      sizeProps = props[size] || {};
    }

    delete rest[size];

    sizeClassNames = {
      ...sizeClassNames,
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.span === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
    };
  });

  const classes = clsx(
    className,
    prefixCls,
    {
      [`${prefixCls}-${span}`]: span,
      [`${prefixCls}-offset-${offset}`]: offset,
      [`${prefixCls}-push-${push}`]: push,
      [`${prefixCls}-pull-${pull}`]: pull,
      [`${prefixCls}-order-${order}`]: order,
    },
    sizeClassNames,
  );

  return (
    <div className={classes} style={colStyle} ref={ref}>
      {children}
    </div>
  );
});

export default Col;
