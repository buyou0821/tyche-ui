import { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';

export const usePrefixCls = (prefixCls: string) => {
  const { getPrefixCls } = useContext(ConfigContext);
  return getPrefixCls(prefixCls);
};
