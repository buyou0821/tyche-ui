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
  mountNode,
);
```

## 使用 iconfont

在[iconfont](www.iconfont.cn)上生成 symbol 引用方式的 js 文件链接，并将该链接传入 createFromIconfont 方法中的 scriptUrl 参数，即可使用 iconfont 项目中的图标

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
