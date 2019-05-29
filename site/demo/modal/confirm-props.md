## confirm 自定义页脚按钮属性

<!--start-code-->

```jsx
const Confirm = () => {
  const handleClick = () => {
    Modal.confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okShape: 'round',
      okText: 'Yes',
      cancelText: 'No',
      okColor: 'success',
      cancelColor: 'danger',
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
      <Button color="secondary" onClick={handleClick}>
        Confirm
      </Button>
    </div>
  );
};
ReactDOM.render(<Confirm />);
```

<!--end-code-->
