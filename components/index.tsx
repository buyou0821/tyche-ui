export { default as ConfigProvider } from './context/ConfigContext';
export { default as Icon } from './icon';
export { default as Button } from './button';
export { default as Portal } from './portal';
export { default as Modal } from './modal';
export { default as Layout } from './layout';
export { default as Row } from './row';
export { default as Col } from './col';
export { default as AppBar } from './appBar';
export { default as Drawer } from './drawer';
export { default as Input } from './input';
export { default as Radio } from './radio';

/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of tyche-ui, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}
/* @remove-on-es-build-end */
