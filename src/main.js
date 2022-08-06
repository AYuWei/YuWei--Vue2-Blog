import "./mock";
import Vue from 'vue'
import App from './App.vue'    
import "./styles/global.less"; 
import router from "@/router/index.js" 
import showMessage from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;
import "./eventBus.js";
import store from "./store"
store.dispatch("setting/fetchSetting"); 
// window.showMessage = showMessage;

// import "./api/banner";
  
// 全局注册指令
import VLoading from "@/directives/loading"
import VLazy from "@/directives/lazy"
Vue.directive("loading", VLoading);
Vue.directive("lazy", VLazy);



new Vue({   
  router,
  store,
  render: h => h(App),
}).$mount('#app')
 
 