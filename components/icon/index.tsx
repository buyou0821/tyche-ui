import React from 'react';
import classNames from 'classnames';
import { svgBaseProps } from './untils';
import createFromIconfont from './IconFont';

import './style';

interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
}

export interface IconProps extends React.DOMAttributes<HTMLElement> {
  name?: string;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
  material?: string;
}

interface IconComponent<p> extends React.FunctionComponent<p> {
  createFromIconfont: typeof createFromIconfont;
}

const Icon: IconComponent<IconProps> = props => {
  const { className, children, material, ...restProps } = props;

  let classString = classNames(
    {
      [`muiicon`]: true,
    },
    className,
  );

  const innerSvgProps: CustomIconComponentProps = {
    ...svgBaseProps,
  };

  let innerNode = null;

  // Iconfont
  if (children) {
    innerNode = <svg {...innerSvgProps}>{children}</svg>;
  }

  // material icons
  if (material) {
    innerNode = material;
    classString = classNames(classString, 'material-icons');
  }

  return (
    <i className={classString} {...restProps}>
      {innerNode}
    </i>
  );
};

Icon.createFromIconfont = createFromIconfont;

export default Icon;
