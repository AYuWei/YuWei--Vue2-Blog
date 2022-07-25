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


### ref refs的使用  不推荐使用
```js
<template>
 <div>
    <p ref="para">some paragraph</p>
    <WTest ref="comp" />
    <button @click="handleClick">查看所有引用</button>
</div>
</template>

<script> 
import WTest from "@/components/WTest/ChildComp.vue";

export default { 
  // 全局注册组件
  components : { 
    WTest
  },
  methods : {
     handleClick() {
      // 获取持有的所有引用
      console.log(this.$refs);
      // console.log(this.$refs.comp.a, this.$refs.comp.b);
      this.$refs.comp.a = 3;
      this.$refs.comp.b = 4;
      this.$refs.comp.m1();
      /*
        {
        	para: p元素（原生DOM）,
        	comp: ChildComp的组件实例
        }
        */
    },
  }
} 
</script> 
```

### showMessage 注入到全局了、直接用
```js
  created(){
    console.log("挂在完成！")
    this.$showMessage({
      content : "好棒棒呀~",
      type : "info",
      duration:2000,
      callback : function(){
        console.log("完蛋~")
      }

    })
  },
```

### 自定义指令 自定义Loading

自定义指令方便我们自行定义需要使用的指令、就和自定义组件一样、可以全局注册、也可以局部注册

`vue使用`
```vue
<div 
    class="home-container" 
    ref="container"
    @wheel="handleWheel"
    v-loading="isLoading"
></div>
```
`loading.js`
```js
import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

// 得到el中loading效果的img元素
function getLoadingImage(el){
    return el.querySelector("img[data-role=loading]");
}

// 创建一个img dom元素
function createElementeImgDom(){
    const imgDom = document.createElement("img");
    imgDom.dataset.role = "loading";
    imgDom.src = loadingUrl;
    imgDom.className = styles.loading;
    return imgDom;
}
/**
 * 
 * @param {\} el 拿到dom元素
 * @param {*} binding  可以拿到传递过来的值， 我们这里使用 value 是否加载完成
 */ 
export default function( el , binding ){
    const curImg = getLoadingImage(el); // 判断是否页面上已经创建
    // 根据 binding.value 的值，决定创建或删除img元素
    if( binding.value ){
        if(!curImg){
            const img = createElementeImgDom();
            el.appendChild(img);
        }
    } else {
        if( curImg ){
            curImg.remove();
        }
    }
}
```
`main.js全局注册`
```js
// 全局注册指令
import VLoading from "@/directives/loading"
Vue.directive("loading", VLoading);
```