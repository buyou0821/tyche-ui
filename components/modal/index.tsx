import Modal, { ModalFuncProps } from './Modal';
import confirm from './Confirm';
import './style';

Modal.confirm = (props: ModalFuncProps) => {
  const config = { ...props };
  return confirm(config);
};

Modal.info = (props: ModalFuncProps) => {
  const config = { ...props };
  return confirm(config);
};

export default Modal;
