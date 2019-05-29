import React, { useState } from 'react';
import { Button, Modal } from 'components/index';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const destroyAll = () => {
    Modal.destroyAll();
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
          Modal.confirm({
            title: 'Do you Want to delete these items?',
            content: (
              <Button shape="outlined" color="danger" onClick={destroyAll}>
                destroyAll
              </Button>
            ),
            onOk() {
              // tslint:disable-next-line:no-console
              console.log('OK');
            },
            onCancel() {
              // tslint:disable-next-line:no-console
              console.log('Cancel');
            },
          });
          // setTimeout(() => {
          //   Modal.confirm({
          //     title: 'Do you Want to delete these items?',
          //     content: 'Some descriptions',
          //     onOk() {
          //       // tslint:disable-next-line:no-console
          //       console.log('OK');
          //     },
          //     onCancel() {
          //       // tslint:disable-next-line:no-console
          //       console.log('Cancel');
          //     },
          //   });
          // }, 1000);
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
      <Button
        style={{ marginLeft: 12 }}
        color="secondary"
        onClick={() => {
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
          setTimeout(() => {
            Modal.confirm({
              title: 'Do you Want to delete these items?',
              content: (
                <Button shape="outlined" color="success" onClick={destroyAll}>
                  destroyAll
                </Button>
              ),
              onOk() {
                // tslint:disable-next-line:no-console
                console.log('OK');
              },
              onCancel() {
                // tslint:disable-next-line:no-console
                console.log('Cancel');
              },
            });
          }, 500);
        }}
      >
        弹出多个confirm
      </Button>
      <Button
        style={{ marginLeft: 12 }}
        color="secondary"
        onClick={() => {
          const updateModal = () => {
            modal.update({
              title: 'new title',
              okText: 'submit',
            });
          };
          const modal = Modal.confirm({
            title: 'Do you Want to delete these items?',
            content: (
              <Button shape="outlined" color="success" onClick={updateModal}>
                更新Modal
              </Button>
            ),
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
        update
      </Button>
      <Button
        style={{ marginLeft: 12 }}
        color="secondary"
        onClick={() => {
          Modal.confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
              // tslint:disable-next-line:no-console
              console.log('onOk');
              return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              // tslint:disable-next-line:no-console
              }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {
              // tslint:disable-next-line:no-console
              console.log('Cancel');
              return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              // tslint:disable-next-line:no-console
              }).catch(() => console.log('Oops errors!'));
            },
          });
        }}
      >
        延迟关闭
      </Button>
    </>
  );
};
