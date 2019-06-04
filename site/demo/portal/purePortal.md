## Portal 传送门

<!--start-code-->

```jsx
const Demo = () => {
  const [PurePortalVisible, setPurePortalVisible] = React.useState(false);
  const [PortalVisible, setPortalVisible] = React.useState(false);

  return (
    <div>
      <div className="demo-portal-conent" style={{ border: '1px solid #ff5252', width: '100%' }}>
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
    </div>
  );
};
ReactDOM.render(<Demo />);
```

<!--end-code-->
