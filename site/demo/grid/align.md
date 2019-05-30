## Flex 使用 align 布局

使用`Row`的`align`属性排版子元素垂直对齐方式。

<!--start-code-->

```jsx
const grid = (
  <div className="row-align">
    <p>Align Top</p>
    <Row type="flex" justify="center" align="top">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <p>Align Middle</p>
    <Row type="flex" justify="space-around" align="middle">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>

    <p>Align Bottom</p>
    <Row type="flex" justify="space-between" align="bottom">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
  </div>
);
ReactDOM.render(grid);
```

<!--end-code-->
