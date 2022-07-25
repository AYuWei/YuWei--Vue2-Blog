import "./mock";
import Vue from 'vue'
import App from './App.vue'    
import "./styles/global.less"; 
import router from "@/router/index.js" 
import showMessage from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;
// window.showMessage = showMessage;

// import "./api/banner";

// 全局注册指令
import VLoading from "@/directives/loading"
Vue.directive("loading", VLoading);

new Vue({   
  router,
  render: h => h(App),
}).$mount('#app')
// showMessage("错误了哦！","info",3000,test)
// showMessage({content:"",type:"info",duration :2000,}) 