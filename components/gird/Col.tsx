import React, { forwardRef, useContext } from 'react';
import RowContext from './RowContext';
import { usePrefixCls } from '../_util/hooks';
import clsx from 'clsx';

type ColSpanType = number | string;

// interface ColSize {
//   span?: ColSpanType;
// }

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: ColSpanType;
}

const Col = forwardRef((props: ColProps, ref: React.RefObject<HTMLDivElement>) => {
  const { gutter } = useContext(RowContext);
  const { className, span, style, children } = props;
  const prefixCls = usePrefixCls('col');

  const colStyle =
    gutter! > 0
      ? {
          paddingLeft: gutter! / 2,
          paddingRight: gutter! / 2,
          ...style,
        }
      : style;

  const classes = clsx(className, prefixCls, {
    [`${prefixCls}-${span}`]: span !== undefined,
  });

  return (
    <div className={classes} style={colStyle} ref={ref}>
      {children}
    </div>
  );
});

export default Col;
