// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
let enquire: any;
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = (mediaQuery: string) => {
    return {
      media: mediaQuery,
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquire = require('enquire.js');
}

import React, { forwardRef, useEffect, useState } from 'react';
import { tuple } from '../_util/type';
import RowContext from './RowContext';
import { usePrefixCls } from '../_util/hooks';
import clsx from 'clsx';

export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type BreakpointMap = Partial<Record<Breakpoint, string>>;
const RowAligns = tuple('top', 'middle', 'bottom');
const RowJustify = tuple('start', 'end', 'center', 'space-around', 'space-between');

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number | Partial<Record<Breakpoint, number>>;
  type?: 'flex';
  align?: (typeof RowAligns)[number];
  justify?: (typeof RowJustify)[number];
}

const responsiveArray: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const responsiveMap: BreakpointMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
};

const Row = forwardRef((props: RowProps, ref: React.RefObject<HTMLDivElement>) => {
  const { className, children, gutter, style } = props;
  const [screens, setScreens] = useState<BreakpointMap>({});

  useEffect(() => {
    Object.keys(responsiveMap).map((screen: Breakpoint) => {
      enquire.register(responsiveMap[screen], {
        match: () => {
          if (typeof gutter !== 'object') {
            return;
          }
          setScreens(prevScreens => ({ ...prevScreens, [screen]: true }));
        },
        unmatch: () => {
          if (typeof gutter !== 'object') {
            return;
          }
          setScreens(prevScreens => ({ ...prevScreens, [screen]: false }));
        },
        // Keep a empty destory to avoid triggering unmatch when unregister
        destroy() {},
      });
    });
    return () => {
      Object.keys(responsiveMap).map((screen: Breakpoint) => {
        enquire.unregister(responsiveMap[screen]);
      });
    };
  }, []);

  const getGutter = (): number | undefined => {
    if (typeof gutter === 'object') {
      for (const breakpoint of responsiveArray) {
        if (screens[breakpoint] && gutter[breakpoint] !== undefined) {
          return gutter[breakpoint];
        }
      }
    }
    return gutter as number;
  };

  const currentGutter = getGutter() || 0;

  const rowStyle =
    currentGutter! > 0
      ? {
          marginLeft: currentGutter! / -2,
          marginRight: currentGutter! / -2,
          ...style,
        }
      : style;

  const prefixCls = usePrefixCls('row');
  const classes = clsx(className, prefixCls);

  return (
    <RowContext.Provider value={{ gutter: currentGutter }}>
      <div className={classes} ref={ref} style={rowStyle}>
        {children}
      </div>
    </RowContext.Provider>
  );
});

export default Row;
