## Modal 对话框

<!--start-code-->

```jsx
const BasicModal = () => {
  const [visible, setVisible] = React.useState(false);

  const handleCancel = e => {
    console.log('cancel', e);
    setVisible(false);
  };
  const handleOk = e => {
    console.log('ok', e);
    setVisible(false);
  };

  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onCancel={handleCancel} 
        onOk={handleOk}
       >
        <div>Some contents...</div>
        <div>Some contents...</div>
        <div>Some contents...</div>
      </Modal>
    </div>
  );
};
ReactDOM.render(<BasicModal />);
```

<!--end-code-->
