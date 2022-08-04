import "./mock";
import Vue from 'vue'
import App from './App.vue'    
import "./styles/global.less"; 
import router from "@/router/index.js" 
import showMessage from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;
import "./eventBus.js";
// window.showMessage = showMessage;

// import "./api/banner";
  
// 全局注册指令
import VLoading from "@/directives/loading"
import VLazy from "@/directives/lazy"
Vue.directive("loading", VLoading);
Vue.directive("lazy", VLazy);

new Vue({   
  router,
  render: h => h(App),
}).$mount('#app')
// showMessage("错误了哦！","info",3000,test)
// showMessage({content:"",type:"info",duration :2000,}) 


/**
// 测试事件总线
import eventBus from "./eventBus";

function handler1(data){
  console.log("handler1", data);
}
function handler2(data){
  console.log("handler2", data);
}
 
eventBus.$on( "event1" , handler1 )
eventBus.$on( "event1" , handler2 )
eventBus.$on( "event2" , handler1 ) 

window.eventBus = eventBus;
window.handler1 = handler1;
window.handler2 = handler2;
 */
/*

eventBus.$emit("event1",123)
main.js?fbea:27 handler1 123
main.js?fbea:30 handler2 123
undefined
eventBus.$emit("event2",456)
main.js?fbea:27 handler1 456
undefined
eventBus.$off("event1",handler1)
undefined
eventBus.$emit("event1",123)
main.js?fbea:30 handler2 123
undefined
eventBus.$emit("event2",456)
main.js?fbea:27 handler1 456

 */

