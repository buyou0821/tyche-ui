## 栅格排序

通过使用 push 和 pull 属性改变列（column）的顺序。

<!--start-code-->

```jsx
const grid = (
  <div>
    <Row>
      <Col span={18} push={6}>
        col-18 col-push-6
      </Col>
      <Col span={6} pull={18}>
        col-6 col-pull-18
      </Col>
    </Row>
  </div>
);
ReactDOM.render(grid);
```

<!--end-code-->
