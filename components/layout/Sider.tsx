import React, { forwardRef, useContext, useLayoutEffect } from 'react';
import { usePrefixCls } from '../_util/hooks';
import { LayoutContext } from './Layout';

interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {}

const generateId = (() => {
  let id = 0;
  return (prefix: string = '') => {
    id += 1;
    return `${prefix}${id}`;
  };
})();

const Sider = forwardRef((props: SiderProps, ref: React.RefObject<HTMLElement>) => {
  const { children, ...rest } = props;
  const { addSider } = useContext(LayoutContext);
  const prefixCls = usePrefixCls('layout');

  useLayoutEffect(() => {
    const uniqueId: string = generateId(`${prefixCls}-sider`);
    addSider(uniqueId);
  }, []);

  return (
    <aside className={`${prefixCls}__sider`} ref={ref} {...rest}>
      {children}
    </aside>
  );
});

export default Sider;
