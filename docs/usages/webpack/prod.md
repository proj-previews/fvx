---
sidebar_position: 3
---

# 生产环境配置 

```js title="./config/webpack.pro.js"
const TerserPlugin = require('terser-webpack-plugin')
const proConfig = {
    devtool: 'source-map',
    mode: 'production',
    optimization:{
        minimizer:[
            new TerserPlugin({
                parallel: true,
            })
        ]
    }
}

module.exports = proConfig 
```
