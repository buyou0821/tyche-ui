import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import isBrowser from '../_util/isBrowser';

type ConfigOnClose = () => void;
type ConfigContent = React.ReactNode | string;
type ConfigDuration = number | (() => void);
export interface MessageType {
  (): void;
}

let messageContainerNode: HTMLElement | null;

const createMessageContainerNode = (): HTMLElement => {
  const messageContainerClass = 'ty-message';
  messageContainerNode = document.querySelector(`.${messageContainerClass}`) as HTMLElement | null;

  if (!messageContainerNode) {
    const bodyNode = document.body;
    const div = document.createElement('div');
    div.className = messageContainerClass;
    messageContainerNode = bodyNode.appendChild(div);
  }

  return messageContainerNode;
};

export const destroyFns: Array<() => void> = [];

const open = (
  type: string,
  content: ConfigContent,
  duration: number = 3,
  onClose?: ConfigOnClose,
): (() => void) => {
  if (!isBrowser) return () => {};
  const iconType = {
    success: 'checked',
    info: 'circle-info',
    warning: 'info',
    error: 'warning',
    loading: 'loading',
  }[type];
  const color = {
    success: 'success',
    info: 'primary',
    warning: 'warning',
    error: 'danger',
    loading: 'default',
  }[type];

  const messageContainerNode = createMessageContainerNode();
  const props = {
    iconType,
    color,
    content,
    duration,
    visible: true,
    selector: messageContainerNode,
    afterClose: destroy.bind(this),
  };

  const div = document.createElement('div');
  const render = (props: any) => {
    ReactDOM.render(React.createElement(Message, props), div);
  };
  render(props);

  const close = () => {
    render(Object.assign(props, { visible: false }));
  };

  let timerId: number | null = null;
  if (duration !== 0) {
    timerId = window.setTimeout(close, duration * 1000);
  }

  const forceClose = () => {
    if (timerId) {
      clearTimeout(timerId);
    }
    close();
  };

  // afterClose
  function destroy() {
    ReactDOM.unmountComponentAtNode(div);
    if (onClose) {
      onClose();
    }

    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === forceClose) {
        destroyFns.splice(i, 1);
        break;
      }
    }

    if (messageContainerNode.childNodes.length <= 1 && messageContainerNode.parentNode) {
      messageContainerNode.parentNode.removeChild(messageContainerNode);
    }
  }

  destroyFns.push(forceClose);

  return forceClose;
};

function destroy() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
}

export interface MessageApi {
  destroy(): void;
  info(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  success(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  error(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  warn(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  warning(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  loading(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
}

const MessageAPI = {
  destroy,
};

['success', 'info', 'warning', 'error', 'loading'].forEach(type => {
  MessageAPI[type] = (
    content: ConfigContent,
    duration: number | undefined,
    onClose?: ConfigOnClose,
  ) => {
    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }
    return open(type, content, duration, onClose);
  };
});

export default MessageAPI as MessageApi;
