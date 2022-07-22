# a_yuwei_blog

## Project setup
```
npm install
```

### 2022.7.18 创建

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


#### 获取真实的DOM元素
```js
import Vue from 'vue'
import App from './App.vue'    
import "./styles/global.less"; 
import router from "@/router/index.js"
import WIcon from "@/components/WIcon/WIcon.vue"

// 在这里
function getComponentRootDom(comp, props){
  const vm = new Vue({
    render:(h) => h(comp, {props})
  });
  vm.$mount();
  console.log(vm)
  return vm.$el; 
}
const dom = getComponentRootDom(WIcon,{
  type : "blog"
}) 
console.log(dom); // 可以获取道Icon 的真实dom标签
 
new Vue({   
  router,
  render: h => h(App),
}).$mount('#app')

```