import Modal, { ModalFuncProps } from './Modal';
import confirm, { destroyFns } from './Confirm';

Modal.confirm = (props: ModalFuncProps) => {
  const config = { ...props };
  return confirm(config);
};

Modal.destroyAll = () => {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};

export default Modal;
