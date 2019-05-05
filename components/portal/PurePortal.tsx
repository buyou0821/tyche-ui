import React, { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { getNodeFromSelector, removeAllChildren } from './until';

export type PurePortalProps = {
  children?: React.ReactNode;
  selector?: string;
  append?: boolean;
};

export const PurePortal: React.FunctionComponent<PurePortalProps> = props => {
  const { selector = 'body', append, children } = props;
  const [DOMNode, setDOMNode] = useState<Element | null>(null);

  useLayoutEffect(() => {
    const node = getNodeFromSelector(selector) as HTMLElement;
    setDOMNode(node);
  }, [selector]);

  if (!DOMNode) return null;

  if (!append) {
    removeAllChildren(DOMNode);
  }

  return createPortal(children, DOMNode);
};
