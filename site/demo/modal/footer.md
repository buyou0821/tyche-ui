## 自定义页脚

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
        Open Modal with customized footer
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        footer={[
          <Button key="return" color="warning" shape="outlined" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" color="primary" shape="outlined" onClick={handleOk}>
            Submit
          </Button>,
        ]}
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
