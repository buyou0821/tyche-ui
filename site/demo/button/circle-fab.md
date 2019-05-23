### 圆形/浮动

<!--start-code-->

```js
const instance = (
  <div>
    <Button shape="circle">
      <Icon material="face" />
    </Button>
    <Button shape="circle" loading color="primary">
      <Icon material="remove" />
    </Button>
    <Button shape="circle" color="secondary">
      <Icon material="create" />
    </Button>
    <Button shape="circle" color="success" fab>
      <Icon material="done" />
    </Button>
    <Button shape="circle" color="warning" fab>
      <Icon material="priority_high" />
    </Button>
    <Button shape="circle" color="danger" fab>
      <Icon material="clear" />
    </Button>
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
