import React, { forwardRef, useLayoutEffect, useMemo, useRef, useImperativeHandle } from 'react';
import { PurePortal, PurePortalProps } from './PurePortal';
import { getNodeFromSelector } from './until';

export interface PortalProps extends Partial<PurePortalProps> {
  visible?: boolean;
  layer?: string;
  className?: string;
  style?: Partial<CSSStyleDeclaration>;
}

interface PortalComponent<p> extends React.ForwardRefExoticComponent<p> {
  PurePortal: typeof PurePortal;
}

export interface PortalImperativeHandlers {
  purePortalRef: React.RefObject<typeof PurePortal | undefined>;
}

const Portal = forwardRef<PortalImperativeHandlers, PortalProps>((props, ref) => {
  const {
    layer = 'div',
    selector = 'body',
    visible = true,
    className,
    style,
    children,
    ...rest
  } = props;

  const node = useMemo(() => document.createElement(layer), [layer]);
  const parent = useMemo(() => getNodeFromSelector(selector), [selector]);
  const purePortalRef = useRef<typeof PurePortal>(null);

  useImperativeHandle<PortalImperativeHandlers, PortalImperativeHandlers>(
    ref,
    () => ({
      purePortalRef,
    }),
    [],
  );

  useLayoutEffect(() => {
    if (!visible || !parent) {
      return;
    }
    parent.appendChild(node);
    if (className) {
      node.className = className;
    }
    if (style) {
      const cssKeys = Object.keys(style) as Array<keyof CSSStyleDeclaration>;
      if (cssKeys.length) {
        node.style.cssText = cssKeys.map(key => `${key}: ${style[key]}`).join('; ');
      }
    }
    return () => {
      parent.removeChild(node);
    };
  }, [visible, node, parent]);

  return visible ? (
    <PurePortal ref={purePortalRef} {...rest} selector={node}>
      {children}
    </PurePortal>
  ) : null;
}) as PortalComponent<PortalProps>;

Portal.PurePortal = PurePortal;
Portal.displayName = 'TychePortal';

export default Portal;
