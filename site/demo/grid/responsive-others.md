## 其他属性的响应式

`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` `xl` `xxl` 属性中来使用。

其中 xs={6} 相当于 xs={{ span: 6 }}。

<!--start-code-->

```jsx
const grid = (
  <div>
    <Row className="row-responsive">
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        Col
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        Col
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        Col
      </Col>
    </Row>
  </div>
);
ReactDOM.render(grid);
```

<!--end-code-->
