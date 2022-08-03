<!-- 回到顶部 -->
<template>
  <div :class="{
    'totop-container' : true,
    show : show
  }" @click="handleClick" >
    TOP
    <span class="top"> </span>
    <span class="bottom"> </span>
    <span class="left"> </span>
    <span class="right"> </span>
  </div>
</template>

<script>
export default {
    data(){
        return {
            show:false
        }
    },
    // 方法
    methods : {
        // 点击事件
        handleClick(){
            // console.log("设置滚动条为0")
            this.$bus.$emit("setMainScroll", 0)
        },
        // 滚动事件
        handleScroll( dom ){
            // 不这个组件中的时候就隐藏
            // console.log("=== dom === ", dom)
            if(!dom){
                this.show = false;
                return;
            }
             this.show = dom.scrollTop >= 1000;
        }
        
    },
    created(){
        this.$bus.$on("mainScroll", this.handleScroll )
    },
    destroyed(){
        this.$bus.$off("mainScroll", this.handleScroll)
    }
}
</script>

<style lang="less" scoped>
@import "@/styles/var.less";
.totop-container{
    position: fixed; 
    right: 100px;
    background: lightsteelblue;
    font-size: 15px;
    font-weight: bold;
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    user-select: none;  
    transition-duration: 500ms;
    transform: rotateY(0deg);
    transform: rotateX(90deg);
    bottom: 50px;
    transform: rotate(0deg);  
    opacity: 0;
    &.show{  
        transform: rotateY(90deg);
        transform: rotateX(0deg); 
        transform: rotate(360deg);
        opacity: 1;   
    }
    cursor: pointer;
    .top{
        // background: #539b0a;
        background: @wheatBlog;
        width: 5px;
        height: 10px;
        display: inline-block;
        position: absolute;
        left: 22px;
        top: -4px;
        border-radius: 9px;
    }
    .right{
        width: 10px;
        height: 5px;
        // background: #e91e63;
        background: @wheatBlog;

        display: inline-block;
        top: 21px;
        right: -4px;
        position: absolute;
        border-radius: 9px;
    }
    .left{
        display: inline-block;
        width: 10px;
        height: 5px;
        background: @wheatBlog;
        // background: red;
        left: -4px;
        position: absolute;
        top: 22px;
        border-radius: 9px;
    }
    .bottom{
        display: inline-block;
        width: 5px;
        height: 10px;
        background: @wheatBlog;
        // background: #044f8b;
        left: 23px;
        position: absolute;
        bottom: -4px;
        border-radius: 9px;
    }
}
</style>