<template>
    <div class="emply-comtainer">
        <MyIcom type="empty"/> 
        <p>{{title}}</p>
    </div>
</template>

<script>
import MyIcom from "@/components/MyIcon/MyIndex.vue"
export default { 
    props:{
        title:{
            type : String,
            default : "无数据"
        },
    },
    components:{
        MyIcom,
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less"; 
@import "~@/styles/mixin.less"; 
    .emply-comtainer{
        // 居中 在混合样式mixin中定义了 .self-center
        .self-center(); 
        color:@gray;
        text-align: center;
    }
    p{ 
        padding:0px;
        margin:0px;
    }
    .icon-container{
        font-size: 72px;
    }
</style>