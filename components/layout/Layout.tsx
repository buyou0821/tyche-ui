import React, { forwardRef, createContext, useState, Context } from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_util/hooks';
import Sider from './Sider';

interface GeneratorProps {
  suffixCls?: string;
  tagName: 'header' | 'footer' | 'main' | 'section';
}

interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {}

interface BasicOrderProps {
  className: string;
  tagName: 'header' | 'footer' | 'main' | 'section';
  ref: React.RefObject<HTMLElement>;
}

const generator = ({ suffixCls, tagName }: GeneratorProps) => (
  BasicComponent: React.FunctionComponent<BasicOrderProps>,
) =>
  forwardRef((props: BasicProps, ref: React.RefObject<HTMLElement>) => {
    const classString = suffixCls
      ? `${usePrefixCls('layout')}__${suffixCls}`
      : usePrefixCls('layout');
    return <BasicComponent ref={ref} className={classString} tagName={tagName} {...props} />;
  });

const Basic: React.FunctionComponent<BasicOrderProps> = props => {
  const { tagName, className, children, ...rest } = props;
  return React.createElement(tagName, { className, ...rest }, children);
};

interface LayoutConsumerProps {
  addSider: (id: string) => void;
}
export const LayoutContext: Context<LayoutConsumerProps> = createContext({
  addSider: () => {},
});

const BasicLayout: React.FunctionComponent<BasicOrderProps> = props => {
  const { tagName: Tag, children, className, ...rest } = props;
  const [siders, setSiders] = useState<Array<string>>([]);

  const siderHook = {
    addSider: (id: string) => {
      setSiders([...siders, id]);
    },
  };

  const classes = clsx(`${className}`, {
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
