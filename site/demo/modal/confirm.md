## confirm 对话框

使用`Modal.confirm()`创建对话框

<!--start-code-->

```jsx
const Confirm = () => {
  const handleClick = () => {
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('Ok');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div>
      <Button
        color="secondary"
        onClick={handleClick}
      >
        Confirm
      </Button>
    </div>
  );
};
ReactDOM.render(<Confirm />);
```

<!--end-code-->
