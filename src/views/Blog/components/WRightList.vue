<template> 
    <ul class="blog-component-container">
        <li v-for="(item , i) in list" :key="i">
            <div  @click="handleClick(item)">
                <span  :class="{ active: item.isSelect }">{{item.name}}</span>
                <span  :class="{ active: item.isSelect , aside:item.aside}" v-if="item.aside">{{ item.aside }}</span>
            </div>
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
       if(!item.isSelect){
         this.$emit("select", item)
       }
    }
   }
    
}
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";

.blog-component-container{  
    padding-left: 5px; 
    user-select: none; // 文字不可选中
    li{ 
        line-height: 25px;  
        padding-left: 15px; 
        span{ 
            line-height: 35px;  
            font-size: 16px;
            cursor: pointer;
            color:@words; 
            padding-right: 8px;
    
        }
        .active {
            color: @wheatBlog;
            font-weight: bold;
        }
        .aside{
            font-size: 12px;
        }
    }
}
</style>