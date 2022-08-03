<!-- 文章详情页 -->
<template>
  <div class="detail-container"> 
    <WLayout>
        <template #default>
            <div class="detail-main" ref="container" v-loading="isLoading">
                <!-- 文章内容 -->
                <BlogDetail v-if="data" :blog="data"/>                                                                                                                                     
                <!-- 文章评论 -->
                <BlogComment  v-if="data" />
            </div>
        </template>
        <template #right>
            <!-- 文章目录 -->
            <div class="detail-toc" v-loading="isLoading" >
                <BlogTOC  v-if="data" :list="data.toc"/> 
            </div>
        </template>
    </WLayout>
  </div>
</template>

<script>
import WLayout from "@/components/WLayout/WLayout.vue";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import { getBlog } from "@/api/blog.js";
import fatchData from "@/mixin/fatchData";
import BlogComment from "./components/BlogComment.vue";
// 注册混合滚动条事件
import setMainScroll from "@/mixin/setMainScroll";
export default {
    mixins : [fatchData(null), setMainScroll('container')],
    components : {
        WLayout,
        BlogDetail,
        BlogTOC,
        BlogComment
    },  
    methods : {
        /**
         * 获取单个博客的地址
         */
        async fatchData(){
            const data =  await getBlog(this.$route.params.id);
            console.log("单个博客的地址",data);
            return data;
        } 
    }, 
    updated(){
        const hash = location.hash;
        location.hash = "";
        setTimeout(() => {
            location.hash = hash;
        }, 50);
    }
}
</script>

<style lang="less" scoped>
@import "@/styles/var.less";
.detail-container{
    color:@words1;
    height: 100%;   
}
.detail-main{
    height:100%;
    overflow-y: scroll; 
    scroll-behavior: smooth; 
}
.detail-toc{
    position : relative;
    height: 100%; 
}
.detail-toc{
    width: 300px;
    // background: @dark;
}
</style>