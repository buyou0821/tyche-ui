import React from 'react';
import { Row, Col } from 'components/index';

export default () => {
  return (
    <div className="demo-grid">
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
      <Row gutter={16}>
        <Col span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col span={6} offset={6}>
          <div className="gutter-box">col-6</div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6} offset="6">
          <div className="gutter-box">col-6</div>
        </Col>
        <Col span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
      </Row>
      <Row gutter={16} type="flex" justify="space-between" align="top">
        <Col span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6} push={2}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col span={6} pull={2}>
          <div className="gutter-box">col-6</div>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={6} md={{ push: 12 }}>
          <div className="gutter-box">col-6</div>
        </Col>
        <Col span={6}>
          <div className="gutter-box">col-6</div>
        </Col>
      </Row>
    </div>
  );
};
