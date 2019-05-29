import isBrowser from './isBrowser';

const getScrollYBarWidth = (): number => {
  if (!isBrowser) {
    return 0;
  }
  const scrollDiv: HTMLDivElement = document.createElement('div');
  Object.assign(scrollDiv.style, {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px',
    overflow: 'scroll',
  });
  document.body.appendChild(scrollDiv);
  const scrollYBarWidth: number = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollYBarWidth;
};

export default getScrollYBarWidth;
