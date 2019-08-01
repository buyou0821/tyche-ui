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
        mask
        maskClosable
        closeOnClickOutside
        className="portal"
        style={{ background: 'rgba(0, 0, 0, 0.2)' }}
      >
        <div style={{ marginTop: 200, pointerEvents: 'none', textAlign: 'center' }}>
          <span
            style={{
              width: 200,
              backgroundColor: '#fff',
              padding: 20,
              display: 'inline-block',
              pointerEvents: 'all',
            }}
          >
            这里是带mask的Portal动态插入body的内容，点击遮罩层关闭
          </span>
        </div>
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
