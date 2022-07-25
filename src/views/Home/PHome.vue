<template>
    <div class="home-container" ref="container" @wheel="handleWheel">
        <!-- 轮播图内容 -->
        <ul class="carousel-container" :style="{marginTop}">
            <li v-for="item in banners" :key="item.id"> 
                <WCarouseLitem :carousel="item" /> 
            </li>
        </ul>
        <!-- 轮播图切换按钮 上按钮 -->
        <div 
            class="icon icon-up" 
            @click="switchTo(index - 1)"
            v-show="index >= 1"
        >
            <WIcon type="arrowUp"/>
        </div>
        <!-- 轮播图切换按钮 下按钮 -->
        <div 
            class="icon icon-down" 
            @click="switchTo(index + 1)"
            v-show="index < banners.length - 1"
        >
            <WIcon type="arrowDown" />
        </div>
        <!-- 轮播图指示器 -->
        <ul class="indicator">
            <li 
            :class="{
                active : i === index,
            }"
            @click="switchTo(i)"
            v-for="(item, i) in banners" :key="item.id"> </li>
        </ul>
    </div>
</template>
<script>
    // home 实现轮播图的框架结构 内容提取出去
    import banner from "@/api/banner"; 
    import WCarouseLitem from "./WCarouseLitem"; // 轮播图内容
    import WIcon from "@/components/WIcon/WIcon"; // 字体图标
    export default {
        components: {
            WCarouseLitem,
            WIcon
        },
        data(){
            return {
                banners:[] , // 首页轮播图数据
                index:0 , // 当前显示的是第几张轮播图
                containerHeight : 0,  // 整个容器的高度、万一高度变化后需要改变 
            }
        },
        async created(){
            this.banners = await banner();
            console.log(this.banners)
        },
        mounted(){
            this.containerHeight = this.$refs.container.clientHeight; 
            // 注册一个窗口改变事件
            window.addEventListener("resize", this.handleResize);
        },
        destroyed() {
            // 销毁注册的窗口改变事件
            window.removeEventListener("resize", this.handleResize);
        },
        methods : {
            switchTo(i){
                console.log("哦买噶、我被点击了", i)
                this.index = i;
            },
            // 滚轮事件
            handleWheel(e){
                console.log(  e  )
            },
            handleResize() {
                this.containerHeight = this.$refs.container.clientHeight;
            },
        },
        computed : {
            // 高滚动的高度
            marginTop(){
                return -this.index * this.containerHeight + "px";
            }
        }
    }
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container{
    height: 100%; 
    width: 100%; 

// 测试
//   width: 60%;
//   height: 40%;
//   overflow: visible;
//   border: 2px solid #008c8c;
//   margin: 100px auto;
//   z-index: 10;

    color:@wheat;
    .carousel-container{
        height:100%; 
        transition-duration: 500ms;
        li{ 
            background:@words;
            height:100%;
        }
}
.icon{
    position: absolute;
    cursor: pointer; 
    left:50%;
    transform: translateX(-50%);
    font-size: 28px;
    color:@gray;
    @mar: 15px;
    &.icon-up{
        top:@mar;
        animation: jump-up 2s infinite;
    }
    &.icon-down{
        bottom:@mar;
        top:auto;
        animation: jump-down 2s infinite; 
    }
    &:hover{
        animation-play-state:paused;
    }
}
@jump : 5px;
@keyframes jump-up {
    0%{
        transform:translateY(@jump);
    } 
    50%{
        transform:translateY(-@jump);
    }
    100%{
        transform:translateY(@jump);
    }
}
@keyframes jump-down {
    0%{
        transform:translateY(-@jump);
    } 
    50%{
        transform:translateY(@jump);
    }
    100%{
        transform:translateY(-@jump);
    }
}
// 轮播图指示器
.indicator{  
    // display: inline-block;
    position:absolute;
    top:50%;
    right:10px;
    transform:translateY(-50%);
    li{
        cursor: pointer; 
        height: 7px;
        width: 7px;
        background:@words; 
        border: 1px solid #fff;
        border-radius: 50%;
        margin: 5px;
        &.active{
            background: #FFF;
        }
    }
}

}
</style>