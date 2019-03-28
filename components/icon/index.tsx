import React from 'react';
import classNames from 'classnames';
import createFromIconfont from './iconFont';
import { svgBaseProps } from './untils';

import './style';

interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
}

export interface IconProps extends React.DOMAttributes<HTMLElement>{
  name?: string;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface IconComponent<p> extends React.FunctionComponent<p> {
  createFromIconfont: typeof createFromIconfont;
}

const Icon: IconComponent<IconProps> = props => {
  const { className, children, ...restProps } = props;

  const classString = classNames(
    {
      [`muiicon`]: true,
    },
    className,
  );

  const innerSvgProps: CustomIconComponentProps = {
    ...svgBaseProps,
  };

  let innerNode = null;

  if (children) {
    innerNode = <svg {...innerSvgProps}>{children}</svg>;
  }

  return (
    <i className={classString} {...restProps}>
      {innerNode}
    </i>
  );
};

Icon.createFromIconfont = createFromIconfont;

export default Icon;
