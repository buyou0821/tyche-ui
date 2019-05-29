import React, { useState } from 'react';
import Button, { ButtonShape, ButtonColor } from '../button';

interface ActionButtonProps {
  shape?: ButtonShape;
  color?: ButtonColor;
  actionFn?: (...args: any[]) => any | PromiseLike<any>;
  closeModal: Function;
}

const ActionButton: React.FunctionComponent<ActionButtonProps> = props => {
  const { actionFn, closeModal, children, ...rest } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    let ret;
    if (actionFn) {
      ret = actionFn();
    }
    if (!ret) {
      closeModal();
    }
    if (ret && ret.then) {
      setLoading(true);
      ret.then(
        () => {
          closeModal();
          setLoading(false);
        },
        (e: Error) => {
          // tslint:disable-next-line:no-console
          console.log(e);
          setLoading(false);
        },
      );
    }
  };

  return (
    <Button onClick={handleClick} loading={loading} {...rest}>
      {children}
    </Button>
  );
};

export default ActionButton;
