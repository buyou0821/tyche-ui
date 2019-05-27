## 使用 iconfont

在[iconfont](https://www.iconfont.cn)上生成`symbol`引用方式的 js 文件链接，并将该链接传入 createFromIconfont 方法中的 scriptUrl 参数，即可使用 iconfont 项目中的图标


<!--start-code-->

```jsx
const IconFont = Icon.createFromIconfont({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const instance = (
  <div>
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" />
    <IconFont type="icon-twitter" />
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->