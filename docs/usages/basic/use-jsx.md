---
sidebar_position: 1
---

# 创建原生React项目 

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

接下来，你会被提示选择相应的模块:

```shell
? 请选择相应的模块? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ sass-loader
 ◯ less-loader
 ◯ typescript
 ◉ image(url-loader,file-loader)
```

### 自动编译

根据项目需求选择完相应的模板之后, `Fvx` 会自动下载并安装`npm`包, 安装完成之后并将尝试编译运行项目脚手架。

```shell
fvx create
欢迎使用fvx, 灵活构建react项目~🎉🎉🎉
? 是否创建新的项目? Yes
? 请输入项目名称? proj
? 请输入作者? mike
? 请选择公共管理状态? no need
? 请选择相应的模块? less-loader, image(url-loader,file-loader)
----------开始构建-----------
当前路径:/private/tmp/test23
创建文件:/private/tmp/test23/package.json
use yarn: yarn
创建文件:/private/tmp/test23/babel.config.js
创建文件夹:/private/tmp/test23/config
创建文件夹:/private/tmp/test23/src
创建文件:/private/tmp/test23/config/webpack.pro.js
创建文件:/private/tmp/test23/config/webpack.base.js
创建文件:/private/tmp/test23/config/webpack.dev.js
创建文件:/private/tmp/test23/src/app.jsx
创建文件:/private/tmp/test23/src/index.html
创建文件:/private/tmp/test23/src/index.jsx
创建文件夹:/private/tmp/test23/src/assets
创建文件夹:/private/tmp/test23/src/styles
创建文件:/private/tmp/test23/src/app.less
创建文件:/private/tmp/test23/src/styles/default.less
创建文件:/private/tmp/test23/src/index.jsx
创建文件夹:/private/tmp/test23/src/assets/images
创建文件:/private/tmp/test23/src/app.jsx
创建文件:/private/tmp/test23/src/assets/images/favicon.ico
创建文件:/private/tmp/test23/src/assets/images/logo.png
----------构建结束-----------
----------yarn包安装---------
yarn install v1.22.10
info No lockfile found.
[1/4] 🔍  Resolving packages...
warning webpack-cli > findup-sync > micromatch > snapdragon > source-map-resolve > resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
warning webpack-cli > findup-sync > micromatch > snapdragon > source-map-resolve > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
warning webpack-dev-server > chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
warning webpack-dev-server > url > querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
warning webpack-dev-server > sockjs > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning webpack-dev-server > webpack-log > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning webpack-dev-server > chokidar > fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > autoprefixer@10.3.3" has unmet peer dependency "postcss@^8.1.0".
warning " > postcss-loader@6.1.1" has unmet peer dependency "postcss@^7.0.0 || ^8.0.1".
warning " > webpack-cli@3.3.12" has incorrect peer dependency "webpack@4.x.x".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
✨  Done in 41.34s.
----------yarn包安装完成-----
use yarn: yarn
yarn run v1.22.10
$ webpack-dev-server --config ./config/webpack.base.js
Happy[babel]: Version: 5.0.1. Threads: 3
ℹ ｢wds｣: Project is running at http://localhost:9901/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /private/tmp/test23/public
ℹ ｢wds｣: 404s will fallback to /index.html
Happy[babel]: All set; signaling webpack to proceed.
ℹ ｢wdm｣: assets by path *.js 3.53 MiB
  asset vendors-node_modules_css-hot-loader_hotModuleReplacement_js-node_modules_mini-css-extract-plu-ce783d.js 3.48 MiB [emitted] (id hint: vendors)
  asset main.js 59.3 KiB [emitted] (name: main)
asset imgs/logo_e01f35384ef628d01cc4b55198bb5133.png 30.9 KiB [emitted] [immutable] [from: src/assets/images/logo.png] (auxiliary name: main)
asset favicon.ico 7.69 KiB [emitted]
asset main.css 1.36 KiB [emitted] (name: main)
asset index.html 572 bytes [emitted]
Entrypoint main 3.54 MiB (30.9 KiB) = vendors-node_modules_css-hot-loader_hotModuleReplacement_js-node_modules_mini-css-extract-plu-ce783d.js 3.48 MiB main.css 1.36 KiB main.js 59.3 KiB 1 auxiliary asset
runtime modules 31.8 KiB 15 modules
modules by path ./node_modules/ 1.31 MiB 51 modules
modules by path ./src/ 2.09 KiB (javascript) 287 bytes (css/mini-extract)
  javascript modules 2.09 KiB
    modules by path ./src/*.jsx 840 bytes
      ./src/index.jsx 256 bytes [built] [code generated]
      ./src/app.jsx 584 bytes [built] [code generated]
    ./src/styles/default.less 608 bytes [built] [code generated]
    ./src/app.less 605 bytes [built] [code generated]
    ./src/assets/images/logo.png 92 bytes [built] [code generated]
  css modules 287 bytes
    css ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./node_modules/less-loader/dist/cjs.js!./src/styles/default.less 0 bytes [built] [code generated]
    css ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./node_modules/less-loader/dist/cjs.js!./src/app.less 287 bytes [built] [code generated]
webpack 5.51.1 compiled successfully in 2123 ms
ℹ ｢wdm｣: Compiled successfully.
```

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
│   ├── app.jsx           # 原生react jsx 文件
│   ├── app.less          # css 预处理器, less处理器
│   ├── assets            # 项目资源文件夹 主要包括图片，字体等资源
│   ├── index.html        # 项目首页模板
│   ├── index.jsx         # 项目首页入口
│   └── styles            # 项目样式文件
└── yarn.lock
```

运行成功后, 用户可以通过 <a>http://localhost:9901/</a> 在浏览器端查看已经运行的项目脚手架，接下来用户便可专心于业务开发。



