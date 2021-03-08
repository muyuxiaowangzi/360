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
      },
      "/login": {
        target: "http://localhost:8088/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/login": ""
        }
      },
      "/aaa": {
        target: "https://shopping.ceair.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/aaa": ""
        }
      }
    }
  }
};
