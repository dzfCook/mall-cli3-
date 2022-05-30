const { defineConfig } = require("@vue/cli-service");
const path = require('path')

function resolve(dir) {
  return path.join(__dirname,dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // configureWebpack:{
  //   resolve:{
  //     alias:{
  //       'components': path.resolve(__dirname,'src/components'),
  //       'content': path.resolve(__dirname,'src/components/content'),
  //       'common':   path.resolve(__dirname,'src/common'),
  //       'assets':  path.resolve(__dirname,'src/assets'),
  //       'network':  path.resolve(__dirname,'src/network'),
  //       'views': path.resolve(__dirname,'src/views'),
  //     }
  //   }
  // }
  chainWebpack:(config)=>{
     config.resolve.alias 
     .set('@',resolve('./src'))
     .set('components',resolve('./src/components'))
     .set('content',resolve('./src/components/content'))
     .set('common',resolve('./src/common'))
     .set('assets',resolve('./src/assets'))
     .set('network',resolve('./src/network'))
     .set('views',resolve('./src/views'))
  }
});
