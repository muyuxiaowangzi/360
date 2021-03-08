module.exports = {
  devServer: {
    proxy: {
<<<<<<< HEAD
      "/api": {
=======
      "/aaa": {
        target: "https://shopping.ceair.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/aaa": ""
        }
      },
      "/ap": {
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
        target: "https://mall.360.cn",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
<<<<<<< HEAD
          "^/api": ""
=======
          "^/ap": ""
        }
      },
      "/login": {
        target: "http://192.168.19.62:8088",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/login": ""
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
        }
      }
    }
  }
};
