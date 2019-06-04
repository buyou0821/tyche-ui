## 带按钮的应用栏

<!--start-code-->

```js
const { IconButton, Typography, ToolBar } = AppBar;

const appBar = (
  <AppBar color="primary">
    <IconButton>
      <Icon style={{ fontSize: 22 }} type="dehaze" />
    </IconButton>
    <Typography>Title</Typography>
    <ToolBar>
      <Button
        shape="text"
        color="default"
        style={{ height: '100%', color: '#fff', marginRight: '-16px' }}
      >
        Login
      </Button>
    </ToolBar>
  </AppBar>
);
ReactDOM.render(appBar);
```

<!--end-code-->
