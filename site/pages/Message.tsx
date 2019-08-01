import React from 'react';
import { Button, message } from 'components/index';

export default () => {
  const handleClick = () => {
    message.success('123', 0);
    message.info('123', 0);
    message.warning('123', 0);
    message.error('123', 0);
    message.loading('123', 0);
  };
  const destroyAll = () => {
    message.destroy();
  };
  const loading = () => {
    const hide = message.loading('Action in progress..', 0, () => {
      console.log('callback');
    });
    setTimeout(hide, 2000);
  };
  return (
    <div style={{ padding: 20 }}>
      <Button color="success" onClick={handleClick}>
        success
      </Button>
      <Button style={{ margin: 20 }} color="danger" onClick={destroyAll}>
        destroyAll
      </Button>
      <Button color="success" onClick={loading}>
        loading
      </Button>
    </div>
  );
};
