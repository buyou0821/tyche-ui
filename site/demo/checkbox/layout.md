## 布局

`Checkbox.Group`内嵌`Checkbox`并与`Grid`组件一起使用，可以实现灵活的布局。

<!--start-code-->

```jsx
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

ReactDOM.render(
  <Checkbox.Group defaultValue={['A', 'B', 'D']} onChange={onChange}>
    <Row>
      <Col span={8}>
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox color="secondary" value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox color="success" value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox color="warning" value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox color="danger" value="E">E</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>,
);
```

<!--end-code-->
