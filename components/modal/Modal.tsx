import React, { Component } from 'react';
import ModalWrapper from './ModalWrapper';
import ModalInner, { ModalInnerProps } from './ModalInner';
import { ModalWrapperProps } from './ModalWrapper';
import { Portal } from '../index';
import { CSSTransition } from 'react-transition-group';
import { ConfigConsumer, ConfigConsumerProps } from '../context/ConfigContext';
import isBrowser from '../_util/isBrowser';
import { ButtonShape, ButtonColor } from '../button';

const TIMEOUT = 300;

export type MousePosition = {
  x: number;
  y: number;
} | null;

let mousePosition: MousePosition = null;

// Inspired by antd and rc-dialog
const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.clientX,
    y: e.clientY,
  };
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};

if (isBrowser) {
  document.documentElement.addEventListener('click', getClickPosition);
}

export type ModalProps = {
  visible?: boolean;
  closeOnESC?: boolean;
  afterClose?: () => void;
} & ModalInnerProps &
  ModalWrapperProps;

interface ModalState {
  exciting: boolean;
  prevVisible: boolean;
}

export interface ModalFuncProps {
  visible?: boolean;
  width?: string | number;
  afterClose?: () => void;
  title?: React.ReactNode;
  content?: React.ReactNode;
  onOk?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  okShape?: ButtonShape;
  cancelShape?: ButtonShape;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  okColor?: ButtonColor;
  cancelColor?: ButtonColor;
}

export type ModalFunc = (
  props: ModalFuncProps,
) => {
  destroy: () => void;
  update: (config: ModalFuncProps) => void;
};

class Modal extends Component<ModalProps, ModalState> {
  static confirm: ModalFunc;
  static destroyAll: () => void;

  static getDerivedStateFromProps(
    { visible }: ModalProps,
    { prevVisible }: ModalState,
  ): Partial<ModalState> | null {
    if (visible === prevVisible) {
      return null;
    }
    if (visible) {
      return {
        prevVisible: visible,
        exciting: false,
      };
    }
    return {
      prevVisible: visible,
      exciting: true,
    };
  }

  mousePosition: MousePosition = null;

  state = {
    prevVisible: this.props.visible || false,
    exciting: false,
  };

  onExited = () => {
    const { afterClose } = this.props;
    if (afterClose) {
      afterClose();
    }
    this.setState({
      exciting: false,
    });
  };

  render() {
    const {
      visible,
      mask,
      maskClosable,
      closeOnESC = true,
      zIndex,
      maskStyle,
      children,
      ...reset
    } = this.props;
    const { onCancel } = this.props;
    const { exciting } = this.state;
    const portalProps = {
      closeOnESC,
    };
    const wrapperProps: ModalWrapperProps = {
      mask,
      maskClosable,
      onCancel,
      visible,
      zIndex,
      maskStyle,
    };

    if (visible) {
      this.mousePosition = this.mousePosition || mousePosition;
    } else {
      this.mousePosition = null;
    }

    return (
      <ConfigConsumer>
        {({ getPrefixCls }: ConfigConsumerProps) => (
          <Portal visible={visible || exciting} {...portalProps}>
            <ModalWrapper {...wrapperProps}>
              <CSSTransition
                in={visible}
                timeout={TIMEOUT}
                appear
                mountOnEnter
                unmountOnExit
                classNames={`${getPrefixCls('modal')}--zoom`}
                onExited={this.onExited}
              >
                <ModalInner mousePosition={this.mousePosition} {...reset}>
                  {children}
                </ModalInner>
              </CSSTransition>
            </ModalWrapper>
          </Portal>
        )}
      </ConfigConsumer>
    );
  }
}

export default Modal;
