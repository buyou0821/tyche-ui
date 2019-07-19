## 在 UmiJS 中使用
[umi](https://umijs.org/) 是一个可插拔的企业级 react 应用框架。  
可参考官方文档快速创建项目。

## 按需加载

在`umi`创建的项目中添加 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 配置。

```js
extraBabelPlugins: [
  // ...
  [
    'import', 
    {
      libraryName: "tyche-ui",
      libraryDirectory: 'es',
      style: "css",
    },
  ]
]
```
再如下使用组件即可按需加载。
```js
import { Button } from 'tyche-ui';
```