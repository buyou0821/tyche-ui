## Portal API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| append | 是否是在目标元素结尾追加元素 | boolean | false |
| blockPageScroll | 弹出遮罩层后是否阻止浏览器滚动 | boolean | true |
| className | 插入容器的className | string | - |
| closeOnClickOutside | 点击child外部时，是否调用`onCancel`，需要和`maskClosable`一起使用 | boolean | false |
| closeOnESC | 是否支持键盘`ESC`键调用`onCancel` | boolean | false |
| mask | 是否渲染遮罩层 | boolean | false |
| maskClosable | 点击遮罩层时是否调用`onCancel`，`maskClosable`需要和`closeOnClickOutside`一起使用，否则点击时直接调用了`onCancel` | boolean | false |
| maskTagName | 遮罩层元素的`tagName` | string | `div` |
| onCancel | 关闭时的回调 | function(e) | - |
| selector | 渲染child的DOM节点 | string/DOM Element | body |
| style | 遮罩层的`style` | object | - |
| visible | 是否渲染child | boolean | false |


## PurePortal API
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| append | 是否是在目标元素结尾追加元素 | boolean | false |
| selector | 渲染child的DOM节点 | string/DOM Element | body |
