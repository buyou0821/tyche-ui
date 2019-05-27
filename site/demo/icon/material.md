## 使用 Material Design Icons

参考[Material Design Icons](https://material.io/tools/icons/?style=baseline)，需要先引入字体库文件:

```html
<link
  rel="stylesheet"
  href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css"
/>
```
<!--start-code-->

```jsx
const instance = (
  <div>
    <Icon material="home" />
    <Icon material="room" />
    <Icon material="thumb_up" />
    <Icon material="loyalty" />
    <Icon material="card_membership" />
    <Icon material="favorite" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->
