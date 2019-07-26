## 禁用状态

在`Radio.Group`或`Radio`上使用`disabled`设置禁用状态。

<!--start-code-->

```jsx
const RadioGroup = () => {
  const [val, setVal] = React.useState(1);

  const handleChange = e => {
    console.log(e);
    setVal(e.target.value);
  };

  return (
    <div>
      <Row>
        <Radio.Group disabled value={1}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
        </Radio.Group>
      </Row>
      <Row>
        <Radio.Group value={val} onChange={handleChange}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3} disabled>
            C
          </Radio>
        </Radio.Group>
      </Row>
    </div>
  );
};
ReactDOM.render(<RadioGroup />);
```

<!--end-code-->
