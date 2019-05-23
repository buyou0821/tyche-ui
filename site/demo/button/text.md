### 文字

<!--start-code-->

```js
const instance = (
  <div>
    <Button shape="text">DEFAULT</Button>
    <Button shape="text" color="primary" center>
      <Icon left material="create" />
      PRIMARY
    </Button>
    <Button shape="text" color="secondary">
      SECONDARY
    </Button>
    <Button shape="text" color="success">
      SUCCESS
    </Button>
    <Button shape="text" color="warning" disabled>
      WARNING
    </Button>
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
