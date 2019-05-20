import React, { Component } from 'react';
import ModalWrapper from './ModalWrapper';
import ModalInner, { ModalInnerProps } from './ModalInner';
import { ModalWrapperProps } from './ModalWrapper';
import { Portal } from '../index';
import { CSSTransition } from 'react-transition-group';
import { ConfigConsumer, ConfigConsumerProps } from '../context/ConfigContext';

type ModalProps = {
  visible: boolean;
  closeOnESC?: boolean;
} & ModalInnerProps &
  ModalWrapperProps;

interface ModalState {
  exciting: boolean;
  prevVisible: boolean;
}

class Modal extends Component<ModalProps, ModalState> {
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

  state = {
    prevVisible: this.props.visible,
    exciting: false,
  };

  onExited = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
    this.setState({
      exciting: false,
    });
  };

  render() {
    const { visible, mask, maskClosable, closeOnESC = true, children, ...reset } = this.props;
    const { onCancel } = this.props;
    const { exciting } = this.state;
    const portalProps = {
      closeOnESC,
      onCancel,
    };
    const wrapperProps: ModalWrapperProps = {
      mask,
      maskClosable,
      onCancel,
      visible,
    };

    return (
      <ConfigConsumer>
        {({ getPrefixCls }: ConfigConsumerProps) => (
          <Portal visible={visible || exciting} {...portalProps}>
            <ModalWrapper {...wrapperProps}>
              <CSSTransition
                in={visible}
                timeout={300}
                appear
                mountOnEnter
                unmountOnExit
                classNames={`${getPrefixCls('modal')}--zoom`}
                onExited={this.onExited}
              >
                <ModalInner {...reset}>{children}</ModalInner>
              </CSSTransition>
            </ModalWrapper>
          </Portal>
        )}
      </ConfigConsumer>
    );
  }
}

export default Modal;
