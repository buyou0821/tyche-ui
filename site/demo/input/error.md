## 错误状态

使用`errorMessage`可以使`Input`以错误状态显示。

<!--start-code-->

```jsx
const input = (
  <Row gutter={20}>
    <Col span={24} md={8}>
      <Input errorMessage="error message" label="Error" labelFloat />
    </Col>
    <Col span={24} md={8}>
      <Input
        icon={<Icon material="person" />}
        errorMessage="error message"
        label="Error"
        labelFloat
      />
    </Col>
  </Row>
);
ReactDOM.render(input);
```

<!--end-code-->
