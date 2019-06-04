## Portal

<!--start-code-->

```jsx
const Demo = () => {
  const [PurePortalVisible, setPurePortalVisible] = React.useState(false);
  const [PortalVisible, setPortalVisible] = React.useState(false);

  return (
    <div>
      <Portal
        onCancel={() => {
          setPortalVisible(false);
        }}
        visible={PortalVisible}
        append
        mask
        maskClosable
        closeOnClickOutside
        className="portal"
        style={{ background: 'rgba(0, 0, 0, 0.2)' }}
      >
        <p style={{ backgroundColor: '#fff', marginTop: 200 }}>
          这里是带mask的Portal动态插入body的内容，可点击遮罩层关闭
        </p>
      </Portal>
      <Button onClick={() => setPortalVisible(true)} color="primary">
        添加带遮罩的Portal到body
      </Button>
    </div>
  );
};
ReactDOM.render(<Demo />);
```

<!--end-code-->
