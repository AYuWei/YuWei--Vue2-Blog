// 数据仓库模块
import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
Vue.use(Vuex); // 应用vuex插件 
const store = new Vuex.Store({
  modules : {
    banner,
    setting,
    about
  },
  strict:true
});

window.store = store;

export default store;
