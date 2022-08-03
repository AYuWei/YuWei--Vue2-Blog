<!-- 博客分类组件 -->
<template>
    <div class="blog-category-container"  v-loading="isLoading">
        <div class="right-list"> 
            <h2>文章分类</h2>
            <WRightList :list="list"  @select="handleSelect" />
        </div>
    </div> 
</template>
<script>
import WRightList from "./WRightList.vue";
import fatchData from "@/mixin/fatchData.js";
import { getBlogCategories } from "@/api/blog.js";
export default {
    mixins:[fatchData([])],
    components:{
        WRightList
    },
    computed : {
        // 获取当前是否有分类 分类是多少
        categoryId(){
            return +this.$route.params.categoryId || -1; 
        },
        list(){
            const totalArticleCount = this.data.reduce((a,b)=> a + b.articleCount, 0);
            const result = [
                {
                    name : "全部",
                    id : -1,
                    articleCount: totalArticleCount, // 文章总数
                },
                ...this.data
            ]; 
            return result.map( (it) => ({
                ...it,
                isSelect : it.id === this.categoryId,
                aside : `${it.articleCount}篇`,
            }));  
        },
        limit(){
            return this.$route.query.limit || 10;
        }
    },
    created(){
        // console.log("分类页",this.categoryId())
    },
    data(){
        return {  
        }
    },
    methods : {
        // 点击后的选项
        handleSelect(item){
            console.log(item)
            const query = {
                page : 1,
                limit: this.limit,
            }
            // 跳转当前分类的id 
            // 没有分类 
            if( item.id === -1 ){
                // /article?page=${newPage}&limit=${this.routeInfo.limit}
                this.$router.push({
                    name : "Blog", 
                    query,
                })
            } else {
                // 有分类
                // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
                this.$router.push({
                    name : "CategoryBlog",
                    query,
                    params : {
                        categoryId: item.id,
                    },
                })
            }
        },
        // 数据请求
        async fatchData(){
            return await getBlogCategories();  
        }
    }
}
</script>
<style lang="less" scoped> 
@import "@/styles/var.less";
.blog-category-container{
    height:100%;
    // background:@dark; 
    overflow-y: auto; 
    position: relative;
    box-sizing: border-box; 
    .right-list{ 
        width: 300px;
        height: 100%;
    }
    h2 {
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 1em;
        margin: 0;
        line-height: 40px;
        align-items: center;
        text-align: center;
        width: 100%;
        color: @lightWords;

    }
}
</style>