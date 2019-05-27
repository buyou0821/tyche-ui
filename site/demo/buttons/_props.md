## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`color` -> `shape` -> `size` -> `loading` -> `disabled`。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 设置按钮颜色类型，可选值为`primary`、 `secondary`、 `success`、 `warning`、 `danger` 或者不设 | string | `default` |
| shape | 设置按钮形状，可选值为 `contained`、 `text` 、 `outlined` 、 `circle`、 `round`、 `icon` 或者不设 | string | `contained` |
| disabled | 按钮失效状态 | boolean | `false` |
| loading | 设置按钮载入状态 | boolean | `false` |
| ripple | 按钮涟漪效果 | boolean | `true` |
| center | 按钮涟漪效果是否从中间散开 | boolean | `false` |
| size | 设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default` |
| href | 点击跳转的地址，指定此属性 button 的行为和 `a` 链接一致 | string | - |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |
