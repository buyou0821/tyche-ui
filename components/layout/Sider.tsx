import React, { forwardRef, useContext, useLayoutEffect, useMemo, useState } from 'react';
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

interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  onBreakpoint?: (broken: boolean) => void;
}

const Sider = forwardRef((props: SiderProps, ref: React.RefObject<HTMLElement>) => {
  const { children, breakpoint, onBreakpoint, ...rest } = props;
  const { addSider, removeSider } = useContext(LayoutContext);
  const prefixCls = usePrefixCls('layout');
  const [below, setBelow] = useState<boolean>(false);

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
    setBelow(mediaQueryList.matches);
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

  return (
    <aside className={`${prefixCls}__sider`} ref={ref} {...rest}>
      {children}
    </aside>
  );
});

export default Sider;
