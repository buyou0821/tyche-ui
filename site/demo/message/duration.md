## 修改延时

自定义时长 10s，默认时长为 3s。

<!--start-code-->

```jsx
const success = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};

ReactDOM.render(
  <Button onClick={success}>Customized display duration</Button>,
);
```

<!--end-code-->
