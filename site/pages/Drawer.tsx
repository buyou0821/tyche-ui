import React, { useState } from 'react';
import { Button, Drawer } from 'components';

export default () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClick}>
        left
      </Button>
      <Drawer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};
