## API 
#### Radio

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 设置禁用状态 | boolean | false |
| value | 根据`value`进行比较，判断是否选中 | any | - |
| color | 设置颜色类型，可选值为`primary`、 `secondary`、 `success`、 `warning`、 `danger` 或者不设 | string | primary |

#### Radio.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 设置所有子单选器的颜色类型，可选值为`primary`、 `secondary`、 `success`、 `warning`、 `danger` 或者不设 | string | primary |
| disabled | 禁选所有子单选器 | boolean | false |
| isValueEqual | 可选参数，判断value值是否相等 | Function(a, b) | (a, b) => a === b |
| onChange | 选项变化时的回调函数 | Function(e:Event) | - |
| value | 用于设置当前选中的值 | any | - |