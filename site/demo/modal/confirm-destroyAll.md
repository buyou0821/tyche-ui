## 销毁确认对话框

<!--start-code-->

```jsx
const Instance = () => {
  const destroyAll = () => {
    Modal.destroyAll();
  };
  return (
    <Button
      color="secondary"
      onClick={() => {
        Modal.confirm({
          title: 'Do you Want to delete these items?',
          content: 'Some descriptions',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
        setTimeout(() => {
          Modal.confirm({
            title: 'Do you Want to delete these items?',
            content: (
              <Button shape="outlined" color="danger" onClick={destroyAll}>
                销毁所有对话框
              </Button>
            ),
            onOk() {
              console.log('OK');
            },
            onCancel() {
              console.log('Cancel');
            },
          });
        }, 300);
      }}
    >
      弹出多个confirm
    </Button>
  );
};
ReactDOM.render(<Instance />);
```

<!--end-code-->
