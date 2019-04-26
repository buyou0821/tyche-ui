export const getNodeFromSelector = (selector: string | Element): Element | null => {
  const node = typeof selector === 'string' ? document.querySelector(selector) : selector;
  return node;
};

export function removeAllChildren(node: Node) {
  while (node && node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
