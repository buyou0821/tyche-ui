## API

#### Checkbox

| 参数           | 说明                                    | 类型              | 默认值 |
| -------------- | --------------------------------------- | ----------------- | ------ |
| checked        | 指定当前是否选中                        | boolean           | false  |
| disabled       | 失效状态                                | boolean           | false  |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | boolean           | false  |
| onChange       | 变化时回调函数                          | Function(e:Event) | -      |

#### Checkbox.Group

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | string\[] | \[] | 3.6.2 |
| disabled | 整组失效 | boolean | false | 3.6.2 |
| options | 指定可选项 | string\[] | \[] | 3.6.2 |
| value | 指定选中的选项 | string\[] | \[] | 3.6.2 |
| onChange | 变化时回调函数 | Function(checkedValue) | - | 3.6.2 |