## Portal API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 	是否渲染child | boolean | `false` |
| selector | 渲染child的DOM节点 | string/DOM Element | `body` |
| append | 是否是在目标元素结尾追加元素 | boolean | `false` |
| mask | 是否渲染遮罩层 | boolean | `false` |
| maskTagName | 遮罩层元素的tagName | string | `div` |
| onCancel | 关闭时的回调 | function(e) | - |
| maskClosable | 点击遮罩层时是否调用`onCancel`，`maskClosable`需要和`closeOnClickOutside`一起使用否则点击时直接调用了`onCancel` | boolean | `false` |
| closeOnClickOutside | 点击child外部时，是否调用`onCancel`，需要和`maskClosable`一起使用 | boolean | `false` |
| closeOnESC | 是否支持键盘`ESC`键调用`onCancel` | boolean | `false` |
| style | 遮罩层的style | object | - |

## PurePortal API
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| selector | 渲染child的DOM节点 | string/DOM Element | `body` |
| append | 是否是在目标元素结尾追加元素 | boolean | `false` |

