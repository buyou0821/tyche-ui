## 向右偏移

使用`offset`可以将列向右侧偏移。

<!--start-code-->

```jsx
const grid = (
  <div>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </div>
);
ReactDOM.render(grid);
```

<!--end-code-->
