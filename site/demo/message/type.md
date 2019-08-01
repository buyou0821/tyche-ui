## 其他提示类型

包括成功、警告、失败。

<!--start-code-->

```jsx
const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const warning = () => {
  message.warning('This is a warning message');
};

ReactDOM.render(
  <div>
    <Button color="success" onClick={success}>Success</Button>
    <Button color="warning" onClick={warning}>Warning</Button>
    <Button color="danger" onClick={error}>Error</Button>
  </div>,
);
```

<!--end-code-->
