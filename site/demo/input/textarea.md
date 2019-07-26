## textarea 输入框

将`type`属性设置为`textarea`可以使用`textarea`控件。
使用`autoSize`属性让控件自动计算高度。

<!--start-code-->

```jsx
const input = (
  <Row gutter={20}>
    <Col span={24} md={8}>
      <Input type="textarea" label="Textarea" />
    </Col>
    <Col span={24} md={8}>
      <Input
        type="textarea"
        label="Textarea"
        labelFloat
        autoSize
        icon={<Icon material="person" />}
        placeholder="Placeholder"
      />
    </Col>
  </Row>
);
ReactDOM.render(input);
```

<!--end-code-->
