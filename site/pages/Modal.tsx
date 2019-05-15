import React from 'react';
import { Button, Modal } from 'components/index';

export default () => {
  return (
    <>
      <Button color="primary">Open Modal</Button>
      <Modal title="Basic Modal">modal content</Modal>
    </>
  );
};
