## 单选组合

一组互斥的 Radio 配合使用

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
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
    </Radio.Group>
  );
};
ReactDOM.render(<RadioGroup />);
```

<!--end-code-->
