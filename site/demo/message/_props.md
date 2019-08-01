## API

组件提供了一些静态方法，使用方式和参数如下：

- `message.success(content, [duration], onClose)`
- `message.error(content, [duration], onClose)`
- `message.info(content, [duration], onClose)`
- `message.warning(content, [duration], onClose)`
- `message.loading(content, [duration], onClose)`

| 参数     | 说明                                          | 类型              | 默认值 | 版本 |
| -------- | --------------------------------------------- | ----------------- | ------ | ---- |
| content  | 提示内容                                      | string\ReactNode | -      |      |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭。 | number            | 3      |      |
| onClose  | 关闭时触发的回调函数                          | Function          | -      |      |

### 全局方法

提供了全局销毁方法：

- `message.destroy()`