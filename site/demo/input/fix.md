## 修饰输入

使用`prefix`和`suffix`属性，可以向`Input`添加前缀或后缀

<!--start-code-->

```jsx
const input = (
  <Row gutter={20}>
    <Col span={24} md={8}>
      <Input label="Regular" prefix="$" />
    </Col>
    <Col span={24} md={8}>
      <Input label="Regular" suffix="元" />
    </Col>
  </Row>
);
ReactDOM.render(input);
```

<!--end-code-->
