import Home from '@/views/Home/PHome.vue'
import Blog from '@/views/Blog/PBlog.vue'
import About from '@/views/About/PAbout.vue'
import Message from '@/views/Message/PMessage.vue'
import Project from '@/views/Project/PProject.vue'

export default [
    { name: "Home", path: "/", component: Home },
    { name: "About", path: "/about", component: About },
    { name: "Blog", path: "/article", component: Blog },
    { name: "Project", path: "/project", component: Project },
    { name: "Message", path: "/message", component: Message },
  ];
  