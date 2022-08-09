// import Home from '@/views/Home/PHome.vue'
// import Blog from '@/views/Blog/PBlog.vue'
// import About from '@/views/About/PAbout.vue'
// import Message from '@/views/Message/PMessage.vue'
// import Project from '@/views/Project/PProject.vue'
// import BlogDetail from '@/views/Blog/PDetail.vue'

// export default [
//   { name: "Home", path: "/", component: Home, meta: { title: "首页" } },
//   { name: "About", path: "/about", component: About, meta: { title: "关于我" } },
//   { name: "Blog", path: "/article", component: Blog, meta: { title: "文章" } },
//   { name: "CategoryBlog", path: "/article/cate/:categoryId", component: Blog, meta: { title: "文章" } }, // 分类
//   { name: "BlogDetail", path: "/article/:id", component: BlogDetail, meta: { title: "文章详情" } },
//   { name: "Project", path: "/project", component: Project, meta: { title: "项目&效果" } },
//   { name: "Message", path: "/message", component: Message, meta: { title: "留言板" } },
// ];

/*
  使用路由懒加载的方式
*/
import NotFound from "@/views/NotFound.vue";
export default [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/Home/PHome.vue"),
    meta: { title: "首页" }
  },
  {
    name: "About",
    path: "/about",
    component: () => import("@/views/About/PAbout.vue"),
    meta: { title: "关于我" }
  },
  {
    name: "Blog",
    path: "/article",
    component: () => import("@/views/Blog/PBlog.vue"),
    meta: { title: "文章" }
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: () => import("@/views/Blog/PBlog.vue"),
    meta: { title: "文章" }
  }, // 分类
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: () => import("@/views/Blog/PDetail.vue"),
    meta: { title: "文章详情" }
  },
  {
    name: "Project",
    path: "/project",
    component: () => import("@/views/Project/PProject.vue"),
    meta: { title: "项目&效果" }
  },
  {
    name: "Message",
    path: "/message",
    component: () => import("@/views/Message/PMessage.vue"),
    meta: { title: "留言板" }
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  },
];