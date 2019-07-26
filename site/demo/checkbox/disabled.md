## 禁用状态

在`Radio`或`Radio.Group`上使用`disabled`设置禁用状态。

<!--start-code-->

```jsx
ReactDOM.render(
  <div>
    <Checkbox disabled>A</Checkbox>
    <Checkbox disabled checked>
      B
    </Checkbox>
    <Checkbox.Group disabled value={['A']}>
      <Checkbox value="A">A</Checkbox>
      <Checkbox value="B">B</Checkbox>
    </Checkbox.Group>
  </div>,
);
```

<!--end-code-->
