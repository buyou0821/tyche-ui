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
        title="Basic Modal"
        visible={visible}
        onClose={() => {
          handleModalVisible(false);
        }}
        closeOnESC
      >
        <div>Some contents...</div>
        <div>Some contents...</div>
        <div>Some contents...</div>
      </Modal>
    </>
  );
};
