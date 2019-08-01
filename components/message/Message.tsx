import React from 'react';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';
import { tuple } from '../_util/type';
import Portal from '../portal';
import Icon from '../icon';
import { usePrefixCls } from '../_util/hooks';

const MessageColors = tuple('default', 'primary', 'secondary', 'success', 'warning', 'danger');
export type MessageColor = (typeof MessageColors)[number];

export interface MessageProps {
  iconType?: string;
  color?: MessageColor;
  content?: React.ReactNode | string;
  visible: boolean;
  selector: HTMLElement | string;
  afterClose(): void;
}

const Message: React.FunctionComponent<MessageProps> = props => {
  const { color = 'default', iconType, selector, visible, afterClose, content } = props;

  const prefixCls = usePrefixCls('message');
  const contentClasses = clsx(`${prefixCls}__content`, {
    [`${prefixCls}--${color}`]: color,
  });

  const onExited = () => {
    afterClose();
  };

  return (
    <Portal.PurePortal append selector={selector}>
      <CSSTransition
        classNames={prefixCls}
        appear
        unmountOnExit
        in={visible}
        timeout={{
          enter: 225,
          exit: 195,
        }}
        onExited={onExited}
      >
        <div className={`${prefixCls}__notice`}>
          <span className={contentClasses}>
            {iconType && <Icon className={`${prefixCls}__icon`} type={iconType} />}
            {content}
          </span>
        </div>
      </CSSTransition>
    </Portal.PurePortal>
  );
};

export default Message;
