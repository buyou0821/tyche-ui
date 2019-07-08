import React, { forwardRef, createContext, useState, Context } from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_util/hooks';
import Sider from './Sider';

interface GeneratorProps {
  suffixCls?: string;
  tagName: 'header' | 'footer' | 'main' | 'section';
}

interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {}

interface BasicOrderProps extends BasicProps {
  prefixCls?: string;
  className?: string;
  tagName: 'header' | 'footer' | 'main' | 'section';
  ref: React.RefObject<HTMLElement>;
}

const generator = ({ suffixCls, tagName }: GeneratorProps) => (
  BasicComponent: React.FunctionComponent<BasicOrderProps>,
) =>
  forwardRef((props: BasicProps, ref: React.RefObject<HTMLElement>) => {
    const prefixCls = suffixCls
      ? `${usePrefixCls('layout')}__${suffixCls}`
      : usePrefixCls('layout');
    return <BasicComponent ref={ref} prefixCls={prefixCls} tagName={tagName} {...props} />;
  });

const Basic: React.FunctionComponent<BasicOrderProps> = props => {
  const { tagName: Tag, className, prefixCls, children, ...rest } = props;
  const classes = clsx(prefixCls, className);
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};

interface LayoutConsumerProps {
  addSider: (id?: string) => void;
  removeSider: (id?: string) => void;
}
export const LayoutContext: Context<LayoutConsumerProps> = createContext({
  addSider: () => {},
  removeSider: () => {},
});

const BasicLayout: React.FunctionComponent<BasicOrderProps> = props => {
  const { tagName: Tag, prefixCls, children, className, ...rest } = props;
  const [siders, setSiders] = useState<Array<string>>([]);

  const siderHook = {
    addSider: (id: string) => {
      setSiders(prevSiders => [...prevSiders, id]);
    },
    removeSider: (id: string) => {
      setSiders(prevSiders => prevSiders.filter(currentId => currentId !== id));
    },
  };

  const classes = clsx(prefixCls, className, {
    [`${usePrefixCls('layout')}--hasSider`]: siders.length > 0,
  });

  return (
    <LayoutContext.Provider value={siderHook}>
      <Tag className={classes} {...rest}>
        {children}
      </Tag>
    </LayoutContext.Provider>
  );
};

interface LayoutComponent<p> extends React.ForwardRefExoticComponent<p> {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Sider: typeof Sider;
}

const Layout = generator({
  tagName: 'section',
})(BasicLayout) as LayoutComponent<BasicProps>;

const Header = generator({
  suffixCls: 'header',
  tagName: 'header',
})(Basic);

const Footer = generator({
  suffixCls: 'footer',
  tagName: 'footer',
})(Basic);

const Content = generator({
  suffixCls: 'content',
  tagName: 'main',
})(Basic);

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;
