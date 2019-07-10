import React, { useLayoutEffect, forwardRef } from 'react';
import clsx from 'clsx';
import { usePrefixCls } from '../_util/hooks';
import { svgBaseProps } from './utils';
import createFromIconfont from './IconFont';
import loadSvgSprite from './loadSvgSprite';
import './style';

export interface IconProps extends React.DOMAttributes<HTMLElement> {
  name?: string;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
  material?: string;
  spin?: boolean;
  rotate?: number;
  left?: boolean;
  right?: boolean;
}

interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  className?: string;
  style?: React.CSSProperties;
}

interface IconComponent<p> extends React.ForwardRefExoticComponent<p> {
  createFromIconfont: typeof createFromIconfont;
}
const Icon = forwardRef((props: IconProps, ref: React.RefObject<HTMLElement>) => {
  const { className, children, material, type, spin, rotate, style, left, right, ...rest } = props;
  const prefixCls = usePrefixCls('icon');

  let classString = clsx(prefixCls, className, {
    [`${prefixCls}--left`]: left,
    [`${prefixCls}--right`]: right,
  });

  const svgClassString = clsx({
    [`${prefixCls}--spin`]: !!spin || type === 'loading',
  });

  let styleProps = {
    style: Object.assign({}, props.style),
  };

  const rotateStyle = rotate
    ? {
        transform: `rotate(${rotate}deg)`,
        msTransform: `rotate(${rotate}deg)`,
      }
    : undefined;

  const innerSvgProps: CustomIconComponentProps = {
    ...svgBaseProps,
    className: svgClassString,
    style: rotateStyle,
  };

  let innerNode = null;

  useLayoutEffect(() => {
    if (typeof type !== 'string') {
      return;
    }
    loadSvgSprite();
  }, [type]);

  // defalut icons
  if (typeof type === 'string') {
    innerNode = (
      <svg {...innerSvgProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }

  // Iconfont
  if (children) {
    innerNode = <svg {...innerSvgProps}>{children}</svg>;
  }

  // Material Design Icons
  if (material) {
    innerNode = material;
    classString = clsx(classString, 'material-icons');
    styleProps = {
      style: Object.assign({}, style, rotateStyle),
    };
  }

  return (
    <i ref={ref} className={classString} {...styleProps} {...rest}>
      {innerNode}
    </i>
  );
}) as IconComponent<IconProps>;

Icon.createFromIconfont = createFromIconfont;

export default Icon;
