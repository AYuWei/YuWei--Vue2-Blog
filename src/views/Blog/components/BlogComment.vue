<!-- 评论页面 -->
<template>
  <div class="blog-comment-container">
    <!-- 缘由：因为这个在外面的评论页面中也有、所以抽离出来、事件的话就抛出给这里处理 -->
    <MessageArea 
      :Title="Title" 
      :subTitle="`(${data.total})`" 
      :list="data.rows" 
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
    methods : { 
      // 求情评论数据
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
      }
    }
}
</script>

<style lang="less" scoped>
.blog-comment-container{  
  // display:inline-block;
}
</style> 