## 栅格间隔

使用 Row 的 gutter 属性设置栅格间隔，支持响应式可以设置成`{ xs: 8, sm: 16, md: 24, lg: 32 }`。

<!--start-code-->

```jsx
const grid = (
  <div>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
    </Row>
  </div>
);
ReactDOM.render(grid);
```

<!--end-code-->
