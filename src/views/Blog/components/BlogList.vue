<!-- 博客文章列表组件 -->
<template>
    <div class="blog-category-container" ref="container" v-loading="isLoading">
        <ul class="blog-ul">
            <li class="blog-li" v-for="(item) in data.rows" :key="item.id">
                <!-- 如果文章又图片则左边显示图片 -->
                <div class="blog-thumb" v-if="item.thumb">
                    <router-link :to="{
                        name:'BlogDetail',
                        // 地址栏中的参数
                        params: { 
                            id: item.id,
                        },
                    }">
                        <img :src="item.thumb" :alt="item.title" /> 
                    </router-link>
                </div>
                <!-- 文章详情页面 -->
                <div class="blog-main"> 
                    <router-link 
                        :to="{
                            name:'BlogDetail',
                            // 地址栏中的参数
                            params: { 
                                id: item.id,
                            },
                        }" 
                    > 
                        <div class="blog-title">{{item.title}}</div>
                    </router-link>
                    <div class="blog-detail">
                        <div class="detail-date list">{{"日期 : " + formatDate(item.createDate)}}</div>
                        <div class="detail-scan list">{{"浏览 : " + item.scanNumber }}</div>
                        <div class="detail-comment list">{{"评论 : " + item.commentNumber }}</div>
                        <div class="detail-category list">{{"分类 : " + item.category.name }}</div> 
                    </div>
                    <div class="blog-description">
                        {{
                            item.description
                        }}
                    </div>
                </div>
            </li> 
        </ul>
        <!-- 分页组件 current:当前页码 total数据总数 limit页容量  visibleNumber可见页码数-->
        <WPage 
            v-if="data.total"
            :current="routeInfo.pages" 
            :total="data.total" 
            :limit="routeInfo.limit" 
            :visibleNumber="10"
            @pageChange="PagerChange"    
        />   
    </div> 
</template>

<script>
import { formatDate } from "@/utils"; // 时间戳的转化格式
import fatchData from "@/mixin/fatchData.js"; // 混入、获取数据的公用数据
import { getBlogs } from "@/api/blog.js"; // 博客中的数据
import WPage from "@/components/WPager/WPager.vue" ; // 分页组件
// 滚动条混合
import setMainScroll from "@/mixin/setMainScroll.js";
export default {
    mixins:[fatchData([]), setMainScroll('container')],
    components : {
        WPage
    },
    computed:{
        routeInfo(){                             
            const categoryId = + this.$route.params.categoryId || -1;
            const pages = + this.$route.query.page || 1;
            const limit = + this.$route.query.limit || 10;  
            // console.log("router信息：", this.$route)
            return {
                categoryId, // 分类id
                pages, // 第几页
                limit // 显示多少条
            }; 
        }
    },
    methods : {
        formatDate,
        // 获取博客中的数据 
        async fatchData(){ 
            const data = await getBlogs( 
                this.routeInfo.pages,
                this.routeInfo.limit,
                this.routeInfo.categoryId,
            ); 
            return data;
        },
        // 分页组件按钮
        PagerChange(e){
            console.log("分页", e); 
            const query = {
                page : e.toString(),
                limit: this.routeInfo.limit.toString(),
            }
            // 跳转当前分类的id 
            // 没有分类 
            if( this.routeInfo.categoryId === -1 ){
                // /article?page=${newPage}&limit=${this.routeInfo.limit} 
                this.$router.push({
                    name : "Blog",
                    query
                })
            } else {
                // 有分类
                // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit} 
                this.$router.push({
                    name : "CategoryBlog",
                    query,
                    params : {
                        categoryId: this.routeInfo.categoryId.toString(),
                    },
                })
            }
        },
    }, 
    // 监听事件的变换
    watch:{
        // 监听route路由变化
        async $route(){ 
            // 开启加载图标
            this.isLoading = true;
            // 将滚动条滚上去
            this.$refs.container.scrollTop = 0;
            // 重新请求数据
            this.data = await this.fatchData();
            // 关闭加载图标
            this.isLoading = false; 
        }
    }

}
</script>
<style lang="less" scoped>
@import "@/styles/var.less";
.blog-category-container{ 
    height:100%;
    width:100%; 
    line-height: 1.7;
    position: relative;
    padding: 20px;
    overflow-y: auto; 
    box-sizing: border-box;
    scroll-behavior: smooth;
    color:@words1; ///lightWords
    .blog-ul{ 
        list-style: none;
        margin: 0;
        padding: 0;
        .blog-li{ 
            height: auto; 
            display: flex;  
            margin-bottom:15px;
            padding:10px; 
            box-shadow: 0px 0px 3px @gray;
            min-width: 900px;
            .blog-thumb{
                flex: 0 0 auto;
                margin-right: 15px;
                img {
                    display: block; 
                    max-width: 200px;
                    border-radius: 5px;
                }
            }
            .blog-main{
                flex: 1 1 auto; 
                .blog-title{ 
                    line-height: 1.4; 
                    font-size: 1.7em; 
                    letter-spacing: 5px; 
                    font-weight: bold;
                    &:hover{
                        color: @gray;
                    }
                }
                .blog-detail{ 
                    display: flex;
                    min-width:650px;
                    height:40px;
                    align-items: center;
                    font-size: 1em;
                    .list{
                        margin-right: 15px;
                    }
                }
                .blog-description{ 
                    font-size: 1.2em;
                    font-weight: bold;
                }

            }
        }
    }
}
</style>