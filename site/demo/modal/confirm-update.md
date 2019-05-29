## 更新 confirm

<!--start-code-->

```jsx
const Confirm = () => {
  const handleClick = () => {
    const updateModal = () => {
      modal.update({
        title: 'new title',
        okText: 'submit',
      });
    };
    const modal = Modal.confirm({
      title: 'Do you Want to delete these items?',
      content: (
        <Button shape="outlined" color="success" onClick={updateModal}>
          更新Modal
        </Button>
      ),
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  return (
    <Button
      style={{ marginLeft: 12 }}
      color="secondary"
      onClick={handleClick}
    >
      Confirm
    </Button>
  );
};
ReactDOM.render(<Confirm />);
```

<!--end-code-->
