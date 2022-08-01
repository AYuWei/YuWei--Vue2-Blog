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
export default new Vue({});