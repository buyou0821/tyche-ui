## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - |
| bodyStyle |	Modal body 样式 | object | - |
| blockPageScroll | 弹出遮罩层后是否阻止浏览器滚动 | boolean | true |
| cancelColor | 取消按钮颜色，可选值`primary`、 `secondary`、 `success`、 `warning`、 `danger` | string | - |
| cancelText | 取消按钮文字 | string/ReactNode | 取消 |
| cancelShape | 取消按钮形状，可选值为 `contained`、 `text` 、 `outlined` 、 `circle`、 `round`、 `icon` 或者不设 | string | Modal默认值`text`，Comfirm默认值`outlined` |
| closable |	是否显示右上角的关闭按钮 | boolean | true |
| content |	内容 | string/ReactNode | - |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |
| okColor | 确定按钮颜色，可选值`primary`、 `secondary`、 `success`、 `warning`、 `danger` | string | primary |
| onOk | 点击确定回调 | function(e) | - |
| okShape | 确定按钮形状，可选值为 `contained`、 `text` 、 `outlined` 、 `circle`、 `round`、 `icon` 或者不设 | string | Modal默认值`text`，Comfirm默认值`outlined` |
| okText | 确定按钮文字 | string/ReactNode | 确定 |
| maskStyle |	遮罩样式 | object | {} |
| style |	可用于设置浮层的样式，调整浮层位置等 | object | {} |
| title |	标题 | string/ReactNode | - |
| visible |	对话框是否可见 | boolean | - |
| width |	宽度 | string/number | Modal默认值`520`Confirm默认值`416` |
| zIndex |	设置Modal的`z-index` | number | 1000 |