import React, { createContext, Context } from 'react';

interface ConfigProviderProps {
  prefixCls?: string;
}

interface ConfigConsumerProps {
  prefixCls?: string;
  getPrefixCls?: (suffixCls: string) => string;
}

export const ConfigContext: Context<ConfigConsumerProps> = createContext({
  getPrefixCls: () => {
    const prefixCls = 'tyche';
    // const { prefixCls = 'tyche' } = props;
    // console.log(prefixCls);
    return prefixCls;
  },
});

const ConfigProvider: React.FunctionComponent<ConfigProviderProps> = props => {
  const getPrefixCls = (suffixCls: string) => {
    const { prefixCls = 'tyche' } = props;
    return `${prefixCls}-${suffixCls}`;
  };
  const config: ConfigConsumerProps = {
    getPrefixCls,
  };
  return <ConfigContext.Provider value={config}>{props.children}</ConfigContext.Provider>;
};

export default ConfigProvider;
