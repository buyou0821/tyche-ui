## Portal 传送门

<!--start-code-->

```jsx
const Demo = () => {
  const [PurePortalVisible, setPurePortalVisible] = React.useState(false);
  const [PortalVisible, setPortalVisible] = React.useState(false);

  return (
    <div>
      <div
        className="demo-portal-conent"
        style={{ border: '1px solid #ff5252', width: 400 }}
      >
        这里是.demo-portal-conent的内容
      </div>
      {PurePortalVisible && (
        <Portal.PurePortal append selector=".demo-portal-conent">
          <p>这是 PurePortal 动态插入.demo-portal-conent的内容</p>
        </Portal.PurePortal>
      )}
      <Button
        style={{ marginTop: 20 }}
        onClick={() => setPurePortalVisible(!PurePortalVisible)}
        color="primary"
      >
        Toggle PurePortal
      </Button>

      <Portal
        onCancel={() => {
          setPortalVisible(false);
        }}
        visible={PortalVisible}
        append
        maskClosable
        closeOnClickOutside
        className="tttppp"
        style={{ background: 'rgba(0, 0, 0, 0.2)' }}
      >
        <p style={{ backgroundColor: '#fff' }}>
          这里是带mask的Portal动态插入body的内容，可点击遮罩层关闭
        </p>
      </Portal>
      <Button
        style={{ marginLeft: 20 }}
        onClick={() => setPortalVisible(true)}
        color="primary"
      >
        添加带遮罩的Portal到body
      </Button>
    </div>
  );
};
ReactDOM.render(<Demo />);
```

<!--end-code-->
