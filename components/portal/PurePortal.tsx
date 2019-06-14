import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { getNodeFromSelector, removeAllChildren } from './util';
import memoize from '../_util/memoize-one';

export type PurePortalProps = {
  children?: React.ReactNode;
  selector: string | HTMLElement;
  append?: boolean;
};

export default class PurePortal extends Component<PurePortalProps> {
  getContainer = memoize((selector: string | HTMLElement): Element | null => {
    const node = getNodeFromSelector(selector);
    if (!node) {
      return node;
    }
    if (!this.props.append) {
      removeAllChildren(node);
    }
    return node;
  });

  contains(el: Node): boolean {
    const container = this.getContainer(this.props.selector);
    return !!(container && container.contains(el));
  }

  render() {
    const { selector, children } = this.props;
    const DOMNode = this.getContainer(selector);

    if (!DOMNode) {
      return null;
    }

    return createPortal(children, DOMNode);
  }
}
