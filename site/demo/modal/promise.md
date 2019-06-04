## 延迟关闭

在`onCancel`或`onOk `方法中返回`promise`可以延迟关闭`创建对话框

<!--start-code-->

```jsx
const confirm = (
  <Button
    style={{ marginLeft: 12 }}
    color="secondary"
    onClick={() => {
      Modal.confirm({
        title: 'Do you Want to delete these items?',
        content: 'Some descriptions',
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'));
        },
      });
    }}
  >
    Confirm
  </Button>
);
ReactDOM.render(confirm);
```

<!--end-code-->
