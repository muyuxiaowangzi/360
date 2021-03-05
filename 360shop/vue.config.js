module.exports = {
  devServer: {
    proxy: 'https://mall.360.cn',
    changeOrigin: true, // 支持跨域
  }
}