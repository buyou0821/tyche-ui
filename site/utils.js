export const DOMAPI = {
  hasClass(elem, className) {
    if (~elem.className.split(/\s+/).indexOf(className)) {
      return true;
    }
    return false;
  },
  addClass(elem, className) {
    if (!this.hasClass(elem, className)) {
      elem.className = elem.className + ' ' + className;
    }
  },
  removeClass(elem, className) {
    if (this.hasClass(elem, className)) {
      const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      elem.className = elem.className.replace(reg, '');
    }
  },
};
