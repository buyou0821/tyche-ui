import svgs from './svgs';
import isBrowser from '../_util/isBrowser';

const svgSprite = (content: string): string => `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    id="__TYCHE_UI_SVG_SPRITE_NODE__"
    style="position:absolute;width:0;height:0"
  >
    <defs>
      ${content}
    </defs>
  </svg>
`;

const renderSvgSprite = (): string => {
  const symbols = Object.keys(svgs)
    .map(id => {
      const content = svgs[id].split('svg')[1];
      return `<symbol id=${id}${content}symbol>`;
    })
    .join('');
  return svgSprite(symbols);
};

const loadSvgSprite = () => {
  if (!isBrowser) {
    return;
  }
  if (!document.getElementById('__TYCHE_UI_SVG_SPRITE_NODE__')) {
    document.body.insertAdjacentHTML('afterbegin', renderSvgSprite());
  }
};

export default loadSvgSprite;
