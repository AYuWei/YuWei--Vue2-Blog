<!-- 单个文章内容页 -->
<template>
  <div class="blog-detail-container">
    <h2>{{blog.title}}</h2>
    <!-- aside不只是侧边栏的意思、还可以当做表述 -->
    <div class="blog-aside">
      <div class="detail-date list">{{"日期 : " + formatDate(blog.createDate)}}</div>
      <div class="detail-scan list">{{"浏览 : " + blog.scanNumber }}</div>
      <div class="detail-comment list">{{"评论 : " + blog.commentNumber }}</div>
      <div class="detail-category list">{{"分类 : " + blog.category.name }}</div>  
    </div>
    <main v-html="blog.htmlContent"> </main>
  </div>
</template>

<script>
import { formatDate } from '@/utils';
import "highlight.js/styles/github.css";
import "@/styles/markdown.css"; 
export default {
  props : {
    blog: {
      type: Object,
      required: true,
    },
  },  
  methods : {
    formatDate
  },
  mounted(){
    console.log("我是内容显示区域",this.blog);
  }
}
</script> 
<style lang="less" scoped>
  .blog-detail-container{
    height:100%;
    padding: 25px 20px;
    box-sizing: border-box;
    overflow-y: scroll;
    scroll-behavior: smooth; 
  }
  h2{
    margin: 0px;
  }
  .blog-aside{ 
      display: flex;
      min-width:650px;
      height:40px;
      align-items: center;
      font-size: 1em;
      .list{
          margin-right: 15px;
      }
  }
</style>