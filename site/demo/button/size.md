### 尺寸

<!--start-code-->

```js
const instance = (
  <div>
    <Button color="primary" size="small">
      <Icon left material="delete" />
      删除
    </Button>
    <Button color="secondary">
      <Icon left material="create" />
      添加
    </Button>
    <Button color="success" size="large">
      成功
      <Icon right material="done" />
    </Button>
    <Button color="danger" shape="circle" size="small">
      <Icon material="warning" />
    </Button>
    <Button color="warning" shape="circle">
      <Icon material="warning" />
    </Button>
    <Button color="danger" shape="circle" size="large">
      <Icon material="warning" />
    </Button>
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
