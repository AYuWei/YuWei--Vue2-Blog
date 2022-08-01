<template>
    <div class="blog-container"> 
        <WLayout> 
            <template #default>
                <BlogList />
            </template>
            <template #right>
                <BlogCategory /> 
            </template>
        </WLayout>
    </div>
</template>
<script>  
import WLayout from "@/components/WLayout/WLayout.vue";
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue"; 

// import {getBlogs} from "@/api/blog"; // 获取文章列表 
export default {
    components:{
    // WRightList,
    WLayout,
    BlogList,
    BlogCategory, 
}, 
    // async created (){
    //     let abc = await getBlogs(); 
    //     console.log(abc)
    // }, 

    data(){
        return {
            page : 0, 
        }
    },
    mounted (){
        // this.page = this.$route.params // { categoryId: "3" }
        // console.log(this.$route) //  获取当前路由信息 
    }
}
</script>
<style lang="less" scoped>
@import "@/styles/var.less";
.blog-container {  
    height:100%; 
}

</style>