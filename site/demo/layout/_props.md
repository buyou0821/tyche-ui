## API

#### Layout
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 容器 className | string | - |
| style | 指定样式 | object | - |

#### Layout.Sider

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 容器宽度 | number/string  | - |
| breakpoint | 触发响应式布局的断点 | Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' } | - |
| onBreakpoint | 触发响应式布局断点时的回调 | (broken) => {} | - |

#### breakpoint width

```
{
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}
```