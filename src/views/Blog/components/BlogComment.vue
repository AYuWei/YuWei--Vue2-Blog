<!-- 评论页面 -->
<template>
  <div class="blog-comment-container">
    <!-- 缘由：因为这个在外面的评论页面中也有、所以抽离出来、事件的话就抛出给这里处理 -->
    <MessageArea 
      :Title="Title" 
      :subTitle="`(${data.total})`" 
      :list="data.rows"
      :isListLoading="isLoading" 
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea/MsgIndex.vue";
import { getComment , postComment } from "@/api/blog.js";
import fatchData from '@/mixin/fatchData'; 
export default {
    mixins : [fatchData({
      total: 0, rows: []
    })],
    components : {
        MessageArea
    },
    data(){
      return {
        Title : "留言板~",
        subTitle : "32",
        list : [],
        page : 1, 
        limit : 10,
      }
    },
    mounted(){
      console.log("1-1 评论数",this.data.rows);
    },
    computed : {
      // 判断是不是不可以在加载数据了
      hasMore(){
        return this.data.rows.length < this.data.total;
      }
    },
    created(){
      // window.getCommentMore =  this.getCommentMore;
      this.$bus.$on("mainScroll", this.handleScroll)
    },
    destroyed(){
      this.$bus.$off("mainScroll", this.handleScroll) 
    },
    methods : { 
      // 请求评论数据
      async fatchData(){
        return await getComment( this.$route.params.id, this.page, this.limit ); 
      },
 
      // 点击提交评论的处理函数callback
      async handleSubmit( formData , callback  ){
        const res = await postComment( {
          ...formData,
          blogId : this.$route.params.id 
        } ); 
        console.log("提交评论的返回结果", res)
        this.data.rows.unshift(res);
        this.data.total ++;
        callback("评论成功！");
      },


      
      // 加载下一页的评论数据
      async getCommentMore(){
        if(!this.hasMore) return ; // 没有更多的评论数据了
        this.isLoading = true;
        this.page ++;
        const resp = await this.fatchData(); // 重新请求评论数据
        console.log("加载评论数据",resp.rows, this.data.rows);
        this.data.total = resp.total;
        // 添加到之前的评论列表里面去
        this.data.rows = this.data.rows.concat(resp.rows);
        this.isLoading = false;
      },
      // 监听滚动条
      handleScroll(dom){
        // console.log("我要滚动了", dom.scrollTop)
        if(this.isLoading || !dom) return ; // 目前正在加载更多
        const range = 100; // 一个到底部可接受的范围
        const dec = Math.abs( dom.scrollTop + dom.clientHeight - dom.scrollHeight );
        if( dec <= range ) this.getCommentMore();
      }

    }
}
</script>

<style lang="less" scoped>
.blog-comment-container{  
  // display:inline-block;
}
</style> 