import React, { useState } from 'react';
import { Row, Radio } from 'components';

export default () => {
  const [value, setValue] = useState('');

  return (
    <div className="demo-radio">
      <Radio>A</Radio>
      <Row>
        <Radio.Group
          onChange={e => {
            setValue(e.target.value);
            console.log(e);
          }}
          value={value}
          color="success"
        >
          <Row>
            <Radio value={1}>A</Radio>
          </Row>
          <Radio value={2} color="danger">
            B
          </Radio>
        </Radio.Group>
      </Row>
      <Row>
        <Radio.Group
          onChange={e => {
            setValue(e.target.value);
            console.log(e);
          }}
          disabled
          value={value}
          color="success"
        >
          <Radio value={1}>A</Radio>
          <Radio value={2} color="danger">
            B
          </Radio>
        </Radio.Group>
      </Row>
    </div>
  );
};
