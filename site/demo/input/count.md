## 显示计数器

受控组件使用`maxLength`和`showCount`属性，可以显示计数器。

<!--start-code-->

```jsx
const InputCount = () => {
  const [val, setVal] = React.useState(1);

  return (
    <Row gutter={20}>
      <Col span={24} md={8}>
        <Input
          label="Count"
          maxLength={10}
          showCount
          value={val}
          onChange={e => {
            setVal(e.target.value);
          }}
        />
      </Col>
    </Row>
  );
};
ReactDOM.render(<InputCount />);
```

<!--end-code-->
