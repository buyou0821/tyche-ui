import React, { useState } from 'react';
import { Button, Modal } from 'components/index';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        color="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onCancel={() => {
          handleCancel();
        }}
      >
        <div>Some contents...</div>
        <div>Some contents...</div>
        <div>Some contents...</div>
      </Modal>
      <Button
        style={{ marginLeft: 12 }}
        color="secondary"
        onClick={() => {
          // Modal.info({});
          Modal.confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
              // tslint:disable-next-line:no-console
              console.log('OK');
            },
            onCancel() {
              // tslint:disable-next-line:no-console
              console.log('Cancel');
            },
          });
        }}
      >
        confirm
      </Button>
      <Button
        style={{ marginLeft: 12 }}
        color="danger"
        onClick={() => {
          Modal.confirm({
            title: 'Are you sure delete this task?',
            content: 'Some descriptions',
            okText: 'Yes',
            cancelText: 'No',
            okColor: 'danger',
            cancelColor: 'success',
            onOk() {
              // tslint:disable-next-line:no-console
              console.log('OK');
            },
            onCancel() {
              // tslint:disable-next-line:no-console
              console.log('Cancel');
            },
          });
        }}
      >
        delete
      </Button>
    </>
  );
};
