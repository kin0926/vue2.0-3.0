const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 关闭语法检查
    lintOnSave: false,
    // 开启代理服务器1
    // devServer: {
    //     // 一会要把请求发送给谁
    //     proxy: 'http://localhost:5000'
    // },

    // 开启代理服务器2，可以开启多个
    devServer: {
        proxy: {
            // '/xx1'是自定义请求前缀，只有有这个前缀的才会走代理
            '/xx1': {
                target: 'http://localhost:5000',
                // 因为请求的时候带着前缀过去的，到了之后要把前缀去掉
                // 变回原本的样子才能找到数据，pathRewrite重写路径
                // '^/xx1': ''，匹配所有以xx1开头的字符串转换成后面的空
                pathRewrite: { '^/xx1': '' },

                ws: true, //用于支持websocket
                changeOrigin: false, //false时显示真实端口(如8080)，true时说谎抄对方的端口
            },

            '/xx2': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/xx2': '' },
            },
        }
    }
})