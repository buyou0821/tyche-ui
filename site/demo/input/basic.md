## Input 输入框

文本输入框，用于收集用户提供的信息。

## 基本使用

<!--start-code-->

```jsx
const input = (
  <Row gutter={20}>
    <Col span={24} md={8}>
      <Input placeholder="Placeholder" />
    </Col>
    <Col span={24} md={8}>
      <Input label="Regular" placeholder="Placeholder" />
    </Col>
    <Col span={24} md={8}>
      <Input label="Regular" placeholder="Placeholder" labelFloat />
    </Col>
    <Col span={24} md={8}>
      <Input defaultValue="DefaultValue" label="Regular" placeholder="Placeholder" labelFloat />
    </Col>
    <Col span={24} md={8}>
      <Input type="password" label="Password" placeholder="Placeholder" labelFloat />
    </Col>
    <Col span={24} md={8}>
      <Input disabled label="Disabled" placeholder="Placeholder" labelFloat />
    </Col>
  </Row>
);
ReactDOM.render(input);
```

<!--end-code-->
