## 更改颜色

在`Radio.Group`或`Radio`上使用`color`设置组件颜色。

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
        <Radio.Group color="success" value={val} onChange={handleChange}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
        </Radio.Group>
      </Row>
      <Row>
        <Radio.Group color="success" value={val} onChange={handleChange}>
          <Radio value={1}>A</Radio>
          <Radio value={2} color="warning">B</Radio>
          <Radio value={3} color="danger">C</Radio>
        </Radio.Group>
      </Row>
    </div>
  );
};
ReactDOM.render(<RadioGroup />);
```

<!--end-code-->
