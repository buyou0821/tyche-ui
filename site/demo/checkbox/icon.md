## 自定义图标

<!--start-code-->

```jsx
ReactDOM.render(
  <div>
    <Checkbox
      color="danger"
      icon={<Icon material="favorite_border" />}
      checkedIcon={<Icon material="favorite" />}
    >
      checkbox
    </Checkbox>
    <Checkbox
      icon={<Icon material="visibility_off" />}
      checkedIcon={<Icon material="visibility" />}
    >
      checkbox
    </Checkbox>
  </div>,
);
```

<!--end-code-->
