import React, { forwardRef, useContext, useLayoutEffect, useMemo } from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_util/hooks';
import { LayoutContext } from './Layout';

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
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
}

const generateId = (() => {
  let id = 0;
  return (prefix: string = '') => {
    id += 1;
    return `${prefix}${id}`;
  };
})();

const BreakpointMap = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

export interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  style?: React.CSSProperties;
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  onBreakpoint?: (broken: boolean) => void;
}

const Sider = forwardRef((props: SiderProps, ref: React.RefObject<HTMLElement>) => {
  const { children, breakpoint, onBreakpoint, width, style, className, ...rest } = props;
  const { addSider, removeSider } = useContext(LayoutContext);
  const prefixCls = usePrefixCls('layout');
  const siderStyle = { width, ...style };

  useLayoutEffect(() => {
    const uniqueId: string = generateId(`${prefixCls}-sider`);
    addSider(uniqueId);

    return () => {
      removeSider(uniqueId);
    };
  }, []);

  const mql = useMemo(() => {
    let matchMedia;
    if (typeof window !== 'undefined') {
      matchMedia = window.matchMedia;
    }
    if (matchMedia && breakpoint && breakpoint in BreakpointMap) {
      return matchMedia(`(max-width: ${BreakpointMap[breakpoint]})`);
    }
    return;
  }, [breakpoint]);

  const responsiveHandler = (mediaQueryList: MediaQueryListEvent | MediaQueryList) => {
    if (onBreakpoint) {
      onBreakpoint(mediaQueryList.matches);
    }
  };

  useLayoutEffect(() => {
    if (!mql) {
      return;
    }
    mql.addListener(responsiveHandler);
    responsiveHandler(mql);

    return () => {
      mql.removeListener(responsiveHandler);
    };
  }, [mql]);

  const classes = clsx(`${prefixCls}__sider`, className);

  return (
    <aside style={siderStyle} className={classes} ref={ref} {...rest}>
      {children}
    </aside>
  );
});

export default Sider;
