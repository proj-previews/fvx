---
sidebar_position: 2
---

# 开发环境配置 

```js title="./config/webpack.dev.js"
const webpack = require('webpack')
const path = require('path')

const devConfig = {
    devtool: 'eval-cheap-module-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        hot: true, 
        historyApiFallback: true, 
        publicPath: '/',
        port: 9901
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = devConfig 
```
