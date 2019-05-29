export const getNodeFromSelector = (selector: string | Element): Element | null => {
  const node = typeof selector === 'string' ? document.querySelector(selector) : selector;
  return node;
};

export const removeAllChildren = (node: Node) => {
  while (node && node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

export const hasScrollYbar = (element: Element) => {
  if (element === document.body) {
    return element.scrollHeight > window.innerHeight;
  }
  return element.scrollHeight > element.clientHeight;
};
