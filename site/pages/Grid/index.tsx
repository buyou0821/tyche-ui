import React from 'react';
import { Row, Col } from 'components/index';
import './style/index.scss';

export default () => {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={'6'}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
      </Row>
    </div>
  );
};
