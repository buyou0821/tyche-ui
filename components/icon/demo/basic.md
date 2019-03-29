## 使用 iconfont

```jsx
const IconFont = Icon.createFromIconfont({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

ReactDOM.render(
  <div>
    <IconFont type="icon-twitter" />
  </div>,
  mountNode,
);
```

## 使用 Material Design Icons

参考[Material Design Icons](https://material.io/tools/icons/?style=baseline)，需要先引入字体库文件

```html
<link
  rel="stylesheet"
  href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css"
/>
```

```jsx
ReactDOM.render(
  <div>
    <Icon material="face" />
  </div>,
  document.getElementById('root'),
);
```
