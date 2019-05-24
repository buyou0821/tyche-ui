import React from 'react';
import ReactDOM from 'react-dom';
import Modal, { ModalFuncProps } from './Modal';
import { Button } from '../index';
import { usePrefixCls } from '../_until/hooks';

export const destroyFns: Array<() => void> = [];

interface ConfirmDialogProps extends ModalFuncProps {
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
    okText = '确 定',
    cancelText = '取 消',
    okColor,
    cancelColor,
  } = props;
  const prefixCls = usePrefixCls('confirm');

  const handleOk = () => {
    if (onOk) {
      onOk();
    }
    close();
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    close();
  };

  return (
    <Modal
      className={`${prefixCls}`}
      visible={visible}
      width={width}
      maskClosable={false}
      onCancel={close}
      afterClose={afterClose}
      footer={null}
    >
      <div className={`${prefixCls}__body`}>
        <span className={`${prefixCls}__title`}>{title}</span>
        <div className={`${prefixCls}__content`}>{content}</div>
      </div>
      <div className={`${prefixCls}__buttons`}>
        {onCancel && (
          <Button shape="outlined" color={cancelColor} onClick={handleCancel}>
            {cancelText}
          </Button>
        )}
        {onOk && (
          <Button shape="outlined" color={okColor || 'primary'} onClick={handleOk}>
            {okText}
          </Button>
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

  const render = (props: any) => {
    ReactDOM.render(<ConfirmDialog {...props} />, div);
  };

  render(currentConfig);

  destroyFns.push(close);

  return {
    destroy: close,
  };
};

export default confirm;
