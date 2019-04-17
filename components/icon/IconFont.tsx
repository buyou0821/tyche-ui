import React from 'react';
import Icon, { IconProps } from './index';

const urlCache = new Set<string>();

interface CustomIconOptions {
  scriptUrl: string;
}

export default function createIconFont(
  options: CustomIconOptions,
): React.FunctionComponent<IconProps> {
  const { scriptUrl } = options;

  if (
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function' &&
    typeof scriptUrl === 'string' &&
    scriptUrl.length &&
    !urlCache.has(scriptUrl)
  ) {
    urlCache.add(scriptUrl);
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    document.body.appendChild(script);
  }

  const IconFont: React.FunctionComponent<IconProps> = props => {
    const { type, ...resetProps } = props;
    let content: JSX.Element | null = null;
    if (props.type) {
      content = <use xlinkHref={`#${type}`} />;
    }
    return <Icon {...resetProps}>{content}</Icon>;
  };

  return IconFont;
}
