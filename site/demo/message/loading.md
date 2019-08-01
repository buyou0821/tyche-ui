## 加载中

进行全局 loading，异步自行移除。

<!--start-code-->

```jsx
const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

ReactDOM.render(
  <Button onClick={success}>loading</Button>,
);
```

<!--end-code-->
