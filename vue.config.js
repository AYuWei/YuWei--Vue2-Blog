const { defineConfig } = require('@vue/cli-service')
 
module.exports = {
  devServer : {
    Proxy : {
      "/api" : {
         target : "http://test.my-site.com"
      }
    }
  }
}
module.exports = defineConfig({
  transpileDependencies: true
})
