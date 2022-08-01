<!-- 评论列表 -->
<template>
  <div class="listData-container">
    <ul>
        <li v-for="item in list" :key="item.id">
            <WAvatar
                :url="item.avatar"
                :size="50"
             />
             <div class="data">
                <div class="header">
                    <div class="author">{{item.nickname}}</div>
                    <div class="time">{{ formatDate(item.createDate, true) }}</div>
                </div>
                <div class="coment">
                    {{ item.content }}
                </div>
             </div>
        </li>
        
    </ul>
  </div>
</template>

<script>
import WAvatar from "@/components/WAvatar/WAvatar.vue";
import { formatDate } from "@/utils";

export default {
    components : {
        WAvatar
    },
    props:{
         list: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        formatDate,
    },
}
</script>

<style lang="less" scoped>
@import "@/styles/var.less";
.listData-container{ 
    width: 100%;
    ul{
        width:100%;
        li{
            margin: 15px 0px;
            padding:10px 0px;
            border-bottom: 1px solid lighten(@lightWords,30%);
            display: flex;
        }
    }
}
.data{
    padding: 0px 15px;
    flex: 1 1 auto;
    .header{
        height:30px;
        position: relative;
        .author{
            display: inline-block;
            font-size:18px;
            font-weight: bold;
            color:@success;
        }
        .time{
            position:absolute;
            right:15px;
            top:0px;
            font-size: 14px;
            line-height: 30px;
        }
    }
}
</style>