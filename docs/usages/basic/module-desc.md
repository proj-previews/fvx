---
sidebar_position: 3
---

# 模块选择说明

### 状态模块 

```shell
fvx create
欢迎使用fvx, 灵活构建react项目~🎉🎉🎉
? 是否创建新的项目? Yes
? 请输入项目名称? proj
? 请输入作者? mike
? 请选择公共管理状态? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ no need
 ◯ mobx
 ◯ redux
```
可以根据项目需求选择不同的公共管理状态模块, 说明如下:
- <strong>no need</strong> 如果项目不需要复杂的状态管理模块, 可选此项, 不会安装任何项目管理状态模块;
- <strong>mobx</strong>  为React常见的公共管理状态模块,可以根据自己的喜欢选择, 如选择并会在脚手架中安装对应的`npm`包和配置文件;
- <strong>redux</strong>  为React常见的公共管理状态模块,可以根据自己的喜欢选择, 如选择并会在脚手架中安装对应的`npm`包和配置文件;

### 其它模块

```shell
? 请选择相应的模块? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ sass-loader
 ◯ less-loader
 ◯ typescript
 ◉ image(url-loader,file-loader)
```

通过上下键来移动到选定的项上, `空格键`表示选中当前项, 字母`a`键表示全选, 字母`i`键表示反选;

- <strong>sass-loader</strong> 项目中使用到scss可以选择此模块, 选中会安装<a>sass-loader</a>, <a>node-sass</a>等安装包,并且会默认配置好<a>webpack</a>配置项, 用户可以开箱即用;

- <strong>less-loader</strong> 项目中使用到less可以选择此模块, 选中会安装<a>less-loader</a>, <a>less</a>等安装包,并且会默认配置好<a>webpack</a>配置项, 用户可以开箱即用;
- <strong>typescript</strong> 如果是<a>Typescript</a>项目, 选中会安装<a>ts-loader</a>, <a>typescript</a>等安装包,并且会默认配置好<a>webpack</a>配置项, 同时会生成可用的<a>tsconfig.json</a>配置文件, 用户可以开箱即用;
- <strong>image(url-loader, file-loader)</strong> 项目中使用到图片, 自定义字体等静态资源需要安装此模块, 选中会安装<a>url-loader</a>, <a>file-loader</a>等安装包,并且会默认配置好<a>webpack</a>配置项, 用户可以开箱即用;


:::danger
在同一个项目脚手架中, 不建议同时使用less-loader 和sass-loader 两个css预处理器, 目前`Fvx` 不支持这种形式;
:::

