import React, { useState } from 'react';
import { Button, Modal } from 'components/index';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleModalVisible = (flag: boolean) => {
    setVisible(!!flag);
  };

  return (
    <>
      <Button
        color="primary"
        onClick={() => {
          handleModalVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        visible={visible}
        onClose={() => {
          handleModalVisible(false);
        }}
        title="Basic Modal"
      >
        <div>Some contents...</div>
        <div>Some contents...</div>
        <div>Some contents...</div>
      </Modal>
    </>
  );
};
