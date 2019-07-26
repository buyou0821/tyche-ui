import React from 'react';
import ReactDOM from 'react-dom';
import Modal, { ModalFuncProps } from './Modal';
import { usePrefixCls } from '../_util/hooks';
import ActionButton from './ActionButton';

export const destroyFns: Array<() => void> = [];

export interface ConfirmDialogProps extends ModalFuncProps {
  afterClose?: () => void;
  close: (...args: any[]) => void;
}

const ConfirmDialog: React.FunctionComponent<ConfirmDialogProps> = props => {
  const {
    visible,
    close,
    afterClose,
    width = 416,
    title,
    content,
    onOk,
    onCancel,
    okShape = 'outlined',
    cancelShape = 'outlined',
    okText = '确 定',
    cancelText = '取 消',
    okColor = 'primary',
    cancelColor,
    ...rest
  } = props;
  const prefixCls = usePrefixCls('confirm');

  return (
    <Modal
      className={`${prefixCls}`}
      visible={visible}
      width={width}
      maskClosable={false}
      onCancel={close}
      afterClose={afterClose}
      footer={null}
      {...rest}
    >
      <div className={`${prefixCls}__body`}>
        <span className={`${prefixCls}__title`}>{title}</span>
        <div className={`${prefixCls}__content`}>{content}</div>
      </div>
      <div className={`${prefixCls}__buttons`}>
        {onCancel && (
          <ActionButton
            shape={cancelShape}
            color={cancelColor}
            closeModal={close}
            actionFn={onCancel}
          >
            {cancelText}
          </ActionButton>
        )}
        {onOk && (
          <ActionButton shape={okShape} color={okColor} closeModal={close} actionFn={onOk}>
            {okText}
          </ActionButton>
        )}
      </div>
    </Modal>
  );
};

const confirm = (config: ModalFuncProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  let currentConfig = { ...config, visible: true, close };

  function close() {
    currentConfig = {
      ...currentConfig,
      visible: false,
      afterClose: destroy.bind(this),
    };
    render(currentConfig);
  }

  function destroy() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function update(newConfig: ModalFuncProps) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };
    render(currentConfig);
  }

  const render = (props: any) => {
    ReactDOM.render(<ConfirmDialog {...props} />, div);
  };

  render(currentConfig);

  destroyFns.push(close);

  return {
    destroy: close,
    update,
  };
};

export default confirm;
