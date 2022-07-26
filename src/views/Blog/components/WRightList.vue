<template> 
    <ul class="blog-component-container">
        <li v-for="(item , i) in list" :key="i">
            <span  @click="handleClick(item)" :class="{ active: item.isSelect }">{{item.name}}</span>
            <RightList v-if="item.children" :list="item.children" @select="handleClick"/>
        </li>
    </ul>
</template>
<script> 
export default {
    name : "RightList",
    props : {
        list : {
            type : Array,
            dafault: () => []
        }
    },
   methods : {
    handleClick(item){ 
        this.$emit("select", item)
    }
   }
    
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";

.blog-component-container{   
    // margin: 50px 0px 5px 10px;
    padding-left: 5px; 
    user-select: none; // 文字不可选中
    li{ 
        line-height: 25px;  
        padding-left: 15px;
        span{ 
            line-height: 35px; 
            display: inline-block;
            cursor: pointer;
        }
        .active {
            color: @wheatBlog;
            font-weight: bold;
        }

    }
}
</style>