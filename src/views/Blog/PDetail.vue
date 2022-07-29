<!-- 文章详情页 -->
<template>
  <div class="detail-container"> 
    <WLayout>
        <template #default>
            <div class="detail-main" v-loading="isLoading">
                <BlogDetail v-if="data" :blog="data"/>
            </div>
        </template>
        <template #right>
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
export default {
    mixins : [fatchData(null)],
    components : {
        WLayout,
        BlogDetail,
        BlogTOC
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
    }
}
</script>

<style lang="less" scoped>
@import "@/styles/var.less";
.detail-container{
    color:@words1;
    height: 100%;
}
.detail-main, .detail-toc{
    position : relative;
    height: 100%; 
}
.detail-toc{
    width: 300px;
    // background: @dark;
}
</style>