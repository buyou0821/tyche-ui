import React from 'react';
import { Switch } from 'components';

export default () => {
  return (
    <div style={{ padding: 20 }}>
      <Switch
        autoFocus
        onClick={(checked, e) => {
          console.log(checked, e);
        }}
      />
      <Switch disabled color="primary" />
      <Switch color="secondary" />
    </div>
  );
};
