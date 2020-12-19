'use strict'
const path = require('path')

/*  webstorm中专门有webpack的相关配置，默认的路径直接是项目根目录下的 webpack.config.js */
module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json', '.css', '.node', '.sass'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    }
  }
}
