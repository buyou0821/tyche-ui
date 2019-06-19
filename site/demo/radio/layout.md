## 布局

<!--start-code-->

```jsx
const RadioGroup = () => {
  const [val, setVal] = React.useState(1);

  const handleChange = e => {
    console.log(e);
    setVal(e.target.value);
  };

  return (
    <Radio.Group value={val} onChange={handleChange}>
      <Row type="flex" style={{ flexDirection: 'column' }}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Row>
    </Radio.Group>
  );
};
ReactDOM.render(<RadioGroup />);
```

<!--end-code-->
