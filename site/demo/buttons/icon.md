### 图标

<!--start-code-->

```js
const instance = (
  <div>
    <div>
      <Button shape="icon">
        <Icon material="face" />
      </Button>
      <Button shape="icon" color="primary">
        <Icon material="remove" />
      </Button>
      <Button shape="icon" color="secondary">
        <Icon material="create" />
      </Button>
      <Button shape="icon" color="success" size="small">
        <Icon material="done" />
      </Button>
      <Button shape="icon" color="warning">
        <Icon material="priority_high" />
      </Button>
      <Button shape="icon" color="danger" size="large" disabled>
        <Icon material="clear" />
      </Button>
    </div>
    <div>
      <Button color="primary">
        <Icon left material="delete" />
        删除
      </Button>
      <Button color="secondary">
        <Icon left material="create" />
        添加
      </Button>
      <Button color="success">
        成功
        <Icon right material="done" />
      </Button>
      <Button color="warning">
        警告
        <Icon right material="warning" />
      </Button>
      <Button color="danger" disabled>
        <Icon left material="send" />
        SEND
      </Button>
    </div>
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
