import Vue from 'vue'
import App from './App.vue'    
import "./styles/global.less"; 
import router from "@/router/index.js"
import WIcon from "@/components/WIcon/WIcon.vue"

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
