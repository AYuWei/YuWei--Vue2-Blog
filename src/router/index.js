import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { titleController } from "@/utils";
Vue.use(VueRouter); // 使用一个vue插件

const router = new VueRouter({
  // 配置
  routes, // 路由匹配规则
  mode: "history", 
});

// 修改路由标题
router.afterEach((to) => {
  if(to.meta.title){ 
    titleController.setRouterTitle(to.meta.title); 
  }
}) 

export default router;
