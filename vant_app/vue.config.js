module.exports = {
    publicPath: './',
    devServer: {
        host: '0.0.0.0',
        port: 7001,
        https: false,
        open: false,
        proxy: {
            "/api": {
                target: "http://www.phonegap100.com/appapi.php",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': 'api'
                }
            }
        }
    }
}
