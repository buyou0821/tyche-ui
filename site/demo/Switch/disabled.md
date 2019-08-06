## 不可用

`Switch`失效状态。

<!--start-code-->

```jsx
const App = () => {
  const [disabled, setDisabled] = React.useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <div>
      <Switch disabled={disabled} />
      <br />
      <Button onClick={toggle} color="primary" style={{ marginTop: 20 }}>
        Toggle disabled
      </Button>
    </div>
  );
};
ReactDOM.render(<App />);
```

<!--end-code-->
