## 自定义比较函数

在`Radio.Group`上使用`isValueEqual`自定义比较函数

<!--start-code-->

```jsx
const RadioGroup = () => {
  const [val, setVal] = React.useState({ foo: 1 });

  const handleChange = e => {
    console.log(e);
    setVal(e.target.value);
  };

  const isValueEqual = (a, b) => a && b && a.foo === b.foo;

  return (
    <div>
      <Radio.Group
        value={val}
        onChange={handleChange}
        isValueEqual={isValueEqual}
      >
        <Radio value={{ foo: 1 }}>foo: 1</Radio>
        <Radio value={{ foo: 2 }}>foo: 2</Radio>
      </Radio.Group>
    </div>
  );
};
ReactDOM.render(<RadioGroup />);
```

<!--end-code-->
