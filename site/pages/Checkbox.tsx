import React, { useState } from 'react';
import { Checkbox, Icon } from 'components';

export default () => {
  const [val, setVal] = useState([1, 2]);
  return (
    <div style={{ padding: 20 }}>
      <Checkbox>checkbox</Checkbox>
      <Checkbox checked indeterminate disabled>
        checkbox
      </Checkbox>
      <Checkbox
        color="danger"
        checked
        icon={<Icon material="favorite_border" />}
        checkedIcon={<Icon material="favorite" />}
      >
        checkbox
      </Checkbox>
      <Checkbox
        icon={<Icon material="visibility_off" />}
        checkedIcon={<Icon material="visibility" />}
      >
        checkbox
      </Checkbox>
      <br />
      <Checkbox.Group value={val} color="success" onChange={vals => setVal(vals)}>
        <Checkbox value={1} color="danger">1</Checkbox>
        <Checkbox value={2}>2</Checkbox>
        <Checkbox value={3}>3</Checkbox>
      </Checkbox.Group>
    </div>
  );
};
