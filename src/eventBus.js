/*
// 存放所有事件中线的对象
const listeners = {}

// 事件总线  
export default {
    // 监听某一个事件
    $on(eventName, handler){ 
        // 没有这个事件就创建这个事件、创建后添加这个事件
        if( !listeners[eventName] ){
            listeners[eventName] = new Set();
        }
        listeners[eventName].add( handler );
    },

    // 取消监听
    $off(eventName, handler){
        if(!listeners[eventName]) return;
        listeners[eventName].delete( handler );
    },

    // 触发监听事件
    $emit(eventName, ...args){
        if(!listeners[eventName]) return;
        for( const handler of listeners[eventName] ){
            handler(...args);
        }
    }
}
*/

import Vue from "vue";
const app = new Vue({});
/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素
 * 
 * 
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 * - 滚动高度
 */
Vue.prototype.$bus = app;
export default app;

