<template>
    <div class="message-container" ref="messageContainer">
        <div class="message-item">
            <MessageArea 
                Title="留言板~"
                :subTitle="`(${data.total})`"  
                :list="data.rows"
                :isListLoading="isLoading"
                @submit="handleSubmit"
             />
        </div>
    </div>
</template>
<script>
import MessageArea from "@/components/MessageArea/MsgIndex.vue";
import fatchData from "@/mixin/fatchData.js";
import setMainScroll from "@/mixin/setMainScroll"; 
import { getMessage , postMessage } from "@/api/message.js"
export default {
    mixins:[fatchData({ total: 0, rows: [] }), setMainScroll("messageContainer") ],
    components : {
        MessageArea
    },
    data(){
        return { 
            page:1,
            limit:10,
        }
    },
    created(){  
      this.$bus.$on("mainScroll", this.handleScroll)
    },
    destroyed(){
      this.$bus.$off("mainScroll", this.handleScroll) 
    },
    computed : {
      // 判断是不是不可以在加载数据了
      hasMore(){
        return this.data.rows.length < this.data.total;
      }
    },
    methods:{ 
        // 点击按钮评论
        async handleSubmit(successMsg, callback){ 
            const resp = await postMessage(successMsg);
            callback("感谢您的留言");
            this.data.rows.unshift(resp);
        },
        async fatchData(){
            return await getMessage(this.page, this.limit); 
        },

        // 加载下一页的评论数据
        async getCommentMore(){
            if(!this.hasMore) return ; // 没有更多的评论数据了
            this.isLoading = true;
            this.page ++;
            const resp = await this.fatchData(); // 重新请求评论数据 
            this.data.total = resp.total;
            // 添加到之前的评论列表里面去
            this.data.rows = this.data.rows.concat(resp.rows);
            this.isLoading = false;
        },
         // 监听滚动条
        handleScroll(dom){ 
            if(this.isLoading || !dom) return ; // 目前正在加载更多
            const range = 100; // 一个到底部可接受的范围
            const dec = Math.abs( dom.scrollTop + dom.clientHeight - dom.scrollHeight );
            if( dec <= range ) this.getCommentMore();
        },

    }
}

</script>
<style lang="less" scoped>
.message-container{
    overflow-y: auto;
    height:100%;
    position: relative; 
    scroll-behavior: smooth;
    .message-item{
        max-width:800px;
        height:100%; 
        margin: 10px auto;
    }
}
</style>