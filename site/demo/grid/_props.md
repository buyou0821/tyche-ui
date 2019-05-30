## Row

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | flex 布局下的垂直对齐方式：`top` `middle` `bottom` | string | - |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | number/object | 0 |
| justify | flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between` | string | - |
| type | 布局模式，可选 `flex` | string | - |

## Col

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number | 0 |
| order | 栅格顺序，`flex`布局模式下有效 | number | 0 |
| pull | 栅格向左移动格数 | number | 0 |
| push | 栅格向右移动格数 | number | 0 |
| span | 栅格占位格数，为 0 时相当于`display: none` | number | - |
| xs | `<576px`响应式栅格，可为栅格数或一个包含其他属性的对象 | number/object | - |
| sm | `≥576px`响应式栅格，可为栅格数或一个包含其他属性的对象 | number/object | - |
| md | `≥768px`响应式栅格，可为栅格数或一个包含其他属性的对象 | number/object | - |
| lg | `≥992px`响应式栅格，可为栅格数或一个包含其他属性的对象 | number/object | - |
| xl | `≥1200px`响应式栅格，可为栅格数或一个包含其他属性的对象	 | number/object | - |
| xxl | `≥1600px`响应式栅格，可为栅格数或一个包含其他属性的对象	 | number/object | - |