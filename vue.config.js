const { defineConfig } = require('@vue/cli-service')
 
module.exports = {
  devServer : {
    Proxy : {
      "/api" : {
         target : "http://test.my-site.com"
      },
      "/blog-img" : {
        target : "http://rgajwjxis.hn-bkt.clouddn.com"
      }
    }
  }
}
module.exports = defineConfig({
  transpileDependencies: true
})
