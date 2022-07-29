import Home from '@/views/Home/PHome.vue'
import Blog from '@/views/Blog/PBlog.vue'
import About from '@/views/About/PAbout.vue'
import Message from '@/views/Message/PMessage.vue'
import Project from '@/views/Project/PProject.vue'
import BlogDetail from '@/views/Blog/PDetail.vue'

export default [
    { name: "Home", path: "/", component: Home },
    { name: "About", path: "/about", component: About },
    { name: "Blog", path: "/article", component: Blog },
    { name: "CategoryBlog", path: "/article/cate/:categoryId", component: Blog }, // 分类
    { name: "BlogDetail", path: "/article/:id", component: BlogDetail }, 
    { name: "Project", path: "/project", component: Project },
    { name: "Message", path: "/message", component: Message },
  ];
  