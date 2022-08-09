// 数据仓库模块
import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";
Vue.use(Vuex); // 应用vuex插件 
const store = new Vuex.Store({
  modules : {
    banner,
    setting,
    about,
    project
  },
  strict:true
});

window.store = store;

export default store;
