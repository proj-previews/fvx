---
sidebar_position: 2 
---

# 创建Typescript项目 

### 创建新项目

`Fvx`的用意就是快速帮助用户创建项目脚手架, 使用户可以更好的专注于业务开发。

运行以下命令来创建一个新项目:

```shell
# mkdir hello-world

# cd hello-world 

hello-world# fvx create
```

:::caution
`Fvx`工具并不负责创建项目根目录， 所以需要用户先创建项目根目录并切换到根目录, 再使用`fvx create`来创建项目脚手架。
:::

### 配置项目属性

接下来，你会被提示填写一些列项目属性:

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

### 选择npm模块 

接下来，你会被提示选择相应的模块, 创建<strong>Typescript</strong>项目，需要选中`typescript`模块:

```shell
? 请选择相应的模块? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ sass-loader
 ◯ less-loader
 ◉ typescript
 ◉ image(url-loader,file-loader)
```

### 自动编译

根据项目需求选择完相应的模板之后, `Fvx` 会自动下载并安装`npm`包, 安装完成之后并将尝试编译运行项目脚手架。

### 脚手架结构

生成的项目脚手架结构

```shell
.
├── babel.config.js       # babel7 配置文件
├── config                # webpack 配置文件 
│   ├── webpack.base.js   
│   ├── webpack.dev.js    # 开发环境配置文件
│   └── webpack.pro.js    # 生产环境配置文件
├── package.json          
├── node_modules 
├── src
│   ├── app.tsx           # 生成typescript 的tsx文件
│   ├── app.less          # css 预处理器, less处理器
│   ├── assets            # 项目资源文件夹 主要包括图片，字体等资源
│   ├── index.html        # 项目首页模板
│   ├── index.jsx         # 项目首页入口
│   └── styles            # 项目样式文件
└── yarn.lock
```

运行成功后, 用户可以通过 <a>http://localhost:9901/</a> 在浏览器端查看已经运行的项目脚手架，接下来用户便可专心于业务开发。





