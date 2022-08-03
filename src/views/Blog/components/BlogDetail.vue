<!-- 单个文章内容页 -->
<template>
  <div class="blog-detail-container">
    <h2>{{blog.title}}</h2>
    <!-- aside不只是侧边栏的意思、还可以当做表述 -->
    <div class="blog-aside"> 
      <span class="detail-date list">日期: {{ formatDate(blog.createDate) }}</span>
      <span class="detail-scan list">浏览: {{ blog.scanNumber }}</span>
      <a  class="detail-comment list" href="#data-form-container">评论: {{ blog.commentNumber }}</a>
      <!-- <a  class="detail-category list" href="">{{ blog.category.name }}</a> -->
      <router-link
        :to="{
          name : 'CategoryBlog',
          params: {
            categoryId: blog.category.id,
          },
        }"
      >
        {{ blog.category.name }}
      </router-link>
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
  }
}
</script> 
<style lang="less" scoped>
  .blog-detail-container{
    // height:100%;
    padding: 25px 20px;
    box-sizing: border-box; 
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