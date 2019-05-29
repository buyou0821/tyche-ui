import React, {
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
  useImperativeHandle,
  useCallback,
} from 'react';
import PurePortal, { PurePortalProps } from './PurePortal';
import { getNodeFromSelector, hasScrollYbar } from './util';
import getScrollYBarWidth from '../_util/getScrollYBarWidth';

interface PatchMeta {
  count: number;
  paddingRight: CSSStyleDeclaration['paddingRight'];
  overflowY: CSSStyleDeclaration['overflowY'];
}

const patched = new Map<HTMLElement, PatchMeta>();

const patchElement = (element: HTMLElement): void => {
  const mate = patched.get(element);
  if (mate) {
    mate.count += 1;
  } else {
    const { overflowY, paddingRight } = element.style;
    const originalPadding: string | null = getComputedStyle(element).paddingRight;
    const newPaddingRight: number = parseFloat(originalPadding || '0') + getScrollYBarWidth();
    element.style.overflowY = 'hidden';
    element.style.paddingRight = `${newPaddingRight}px`;
    const newMate: PatchMeta = {
      count: 1,
      overflowY,
      paddingRight,
    };
    patched.set(element, newMate);
  }
};

const restoreElement = (element: HTMLElement): void => {
  const mate = patched.get(element);
  if (!mate) {
    throw new Error('restoreElement error');
  }
  if (mate.count === 1) {
    patched.delete(element);
    element.style.overflowY = mate.overflowY;
    element.style.paddingRight = mate.paddingRight;
  } else {
    mate.count -= 1;
  }
};

export interface PortalProps extends Partial<PurePortalProps> {
  visible?: boolean;
  mask?: boolean;
  maskTagName?: string;
  className?: string;
  style?: Partial<CSSStyleDeclaration>;
  maskClosable?: boolean;
  closeOnClickOutside?: boolean;
  closeOnESC?: boolean;
  onCancel?: (event: KeyboardEvent | TouchEvent | MouseEvent | React.MouseEvent) => void;
  blockPageScroll?: boolean;
}

interface PortalComponent<p> extends React.ForwardRefExoticComponent<p> {
  PurePortal: typeof PurePortal;
}

export interface PortalImperativeHandlers {
  purePortalRef: React.RefObject<PurePortal | undefined>;
}

const Portal = forwardRef<PortalImperativeHandlers, PortalProps>((props, ref) => {
  const {
    mask,
    maskTagName = 'div',
    selector = 'body',
    visible,
    className,
    style,
    children,
    maskClosable,
    closeOnClickOutside,
    closeOnESC,
    onCancel,
    blockPageScroll = true,
    ...rest
  } = props;

  const node = useMemo(() => document.createElement(maskTagName), [maskTagName, mask]);
  const parent = useMemo(() => getNodeFromSelector(selector), [selector]);
  const purePortalRef = useRef<PurePortal>(null);

  const contains = useCallback((el: Node) => {
    const purePortal = purePortalRef.current;
    if (!purePortal) {
      return false;
    }
    return purePortal.contains(el);
  }, []);
  useImperativeHandle<PortalImperativeHandlers, PortalImperativeHandlers>(
    ref,
    () => ({
      purePortalRef,
      contains,
    }),
    [],
  );

  useLayoutEffect(() => {
    if (!visible || !parent) {
      return;
    }
    parent.appendChild(node);
    if (style) {
      const cssKeys = Object.keys(style) as Array<keyof CSSStyleDeclaration>;
      if (cssKeys.length) {
        node.style.cssText = cssKeys.map(key => `${key}: ${style[key]}`).join('; ');
      }
    }
    return () => {
      parent.removeChild(node);
    };
  }, [visible, node, parent, style]);

  useLayoutEffect(() => {
    if (className) {
      node.className = className;
    }
  }, [className]);

  useLayoutEffect(() => {
    if (!visible || !mask) {
      return;
    }

    const { position, top, right, bottom, left } = node.style;
    node.style.position = parent === document.body ? 'fixed' : 'absolute';
    node.style.top = '0';
    node.style.right = '0';
    node.style.bottom = '0';
    node.style.left = '0';
    return () => {
      node.style.position = position;
      node.style.top = top;
      node.style.right = right;
      node.style.bottom = bottom;
      node.style.left = left;
    };
  }, [visible, mask, maskTagName, node]);

  useLayoutEffect(() => {
    if (
      !visible ||
      !blockPageScroll ||
      !parent ||
      !(parent instanceof HTMLElement) ||
      !hasScrollYbar(parent)
    ) {
      return;
    }
    patchElement(parent);
    return () => restoreElement(parent);
  }, [parent, visible, blockPageScroll]);

  useLayoutEffect(() => {
    if (!visible) {
      return;
    }

    function handleEvent(event: MouseEvent | TouchEvent) {
      if (event.defaultPrevented || !closeOnClickOutside || !visible) {
        return;
      }

      const { target } = event;
      if (!(target instanceof Node) || target === node || !contains(target)) {
        if (onCancel) {
          onCancel(event);
        }
      }
    }

    let dispose;
    if (closeOnClickOutside) {
      if (maskClosable) {
        node.addEventListener('touchstart', handleEvent);
        node.addEventListener('click', handleEvent);
        dispose = () => {
          node.removeEventListener('touchstart', handleEvent);
          node.removeEventListener('click', handleEvent);
        };
      } else {
        window.addEventListener('touchstart', handleEvent);
        window.addEventListener('click', handleEvent);
        dispose = () => {
          window.removeEventListener('touchstart', handleEvent);
          window.removeEventListener('click', handleEvent);
        };
      }
    }

    return dispose;
  }, [visible, maskClosable, closeOnClickOutside, node]);

  useLayoutEffect(() => {
    if (!visible || !closeOnESC || !onCancel) {
      return;
    }

    function handleKeyUp(event: KeyboardEvent) {
      if (!onCancel) {
        return;
      }
      // ESC
      if (event.keyCode === 27) {
        onCancel(event);
      }
    }

    document.body.addEventListener('keyup', handleKeyUp);
    return () => {
      document.body.removeEventListener('keyup', handleKeyUp);
    };
  }, [visible, closeOnESC, onCancel]);

  return visible ? (
    <PurePortal ref={purePortalRef} {...rest} selector={node}>
      {children}
    </PurePortal>
  ) : null;
  // return visible ? 123 : 321;
}) as PortalComponent<PortalProps>;

Portal.PurePortal = PurePortal;
Portal.displayName = 'TychePortal';

export default Portal;
