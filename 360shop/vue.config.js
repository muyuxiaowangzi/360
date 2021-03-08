module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://mall.360.cn",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
