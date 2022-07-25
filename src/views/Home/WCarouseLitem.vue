<template>
    <div 
        class="carouse-litem-container"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        ref="container"
        >
        <div class="carouse-image" ref="image"  :style="imagePosition">
            <!-- <img :src="carousel.bigImg" alt=""> -->
            <MyImageLoader 
                :src="carousel.bigImg"
                :placeholder="carousel.midImg"
                :duration=1000
                @load="this.ImageLoad"
           /> 
        </div>
        <div class="title" ref="title">{{ carousel.title }}</div>
        <div class="desc" ref="desc">{{ carousel.description }}</div> 
    </div>    
</template>
<script>
import MyImageLoader from "@/components/WImageLoader/WImageLoader.vue"

export default {
    props : ["carousel"],
    components:{
        MyImageLoader
    },
    data(){
        return {
            titleWidth:0, // 标题宽度
            titleHeight:0, // 标题高度
            descWidth:0, //  表述宽度
            descHeight:0, //  表述高度
            containerSize : null, // 外出容器尺寸
            innerSize : null , // 里层容器的尺寸
            mouseX : 0, // 鼠标的横坐标
            mouseY : 0, // 鼠标的纵坐标
        }
    }, 
    computed : {
        // 得到图标的坐标
        imagePosition(){
            if(!this.innerSize || !this.containerSize){
                return ;
            }
            const extraWidth = this.innerSize.width - this.containerSize.width; // 多处的宽度
            const extraHeight = this.innerSize.height - this.containerSize.height; // 多出的高度
            const left = (-extraWidth / this.containerSize.width) * this.mouseX;
            const top = (-extraHeight / this.containerSize.height) * this.mouseY;
            return {
                transform: `translate(${left}px, ${top}px)`,
            };
       },
       center() {
            return {
                x: this.containerSize.width / 2,
                y: this.containerSize.height / 2,
            };
        },

    },
    // 生命周期函数、dom挂在完成后
    // 可以获取标题高度和描述容器高度 
    mounted(){
        console.log(this.carousel)
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth; 
        this.titleHeight = this.$refs.title.clientHeight;
        this.descHeight = this.$refs.desc.clientHeight; 
        this.setSize();
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
        window.addEventListener("resize", this.setSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.resize);
    },
    methods:{
        // 左中排列 文字排列
        // ImageLoad(){ 
        //     this.$refs.title.style.opacity = 1;
        //     this.$refs.title.style.width = 0;
        //     // 强制让浏览器渲染一次
        //     this.$refs.title.clientWidth; // reflow
        //     this.$refs.title.style.transition = "1s";
        //     this.$refs.title.style.width = this.titleWidth + "px";

        //     // 描述也是一样
        //     this.$refs.desc.style.opacity = 1;
        //     this.$refs.desc.style.width = 0;
        //     // 强制让浏览器渲染一次
        //     this.$refs.desc.clientWidth; // reflow
        //     this.$refs.desc.style.transition = "2s 1s";
        //     this.$refs.desc.style.width = this.descWidth + "px";
        // },

        // 右上文字排列
         ImageLoad(){ 
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.height = 0;
            // 强制让浏览器渲染一次
            this.$refs.title.clientWidth; // reflow
            this.$refs.title.style.transition = "1s";
            this.$refs.title.style.height = this.titleHeight + "px";

            // 描述也是一样
            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.height = 0;
            // 强制让浏览器渲染一次
            this.$refs.desc.clientWidth; // reflow
            this.$refs.desc.style.transition = "2s 1s";
            this.$refs.desc.style.height = this.descHeight + "px";
        },
        setSize(){
            this.containerSize = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight,
            }
            this.innerSize = {
                width: this.$refs.image.clientWidth,
                height: this.$refs.image.clientHeight,
            };
        },
        // 鼠标移动事件
        handleMouseMove(e){
            const rect = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },
        // 鼠标移出的事件
        handleMouseLeave() {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        },
    }
}
</script>
<style lang="less" scoped> 
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.carouse-litem-container{
   
    width: 100%;
    height:100%;  
    position: relative;
    overflow: hidden;

    .carouse-image{   
        width: 110%;
        height: 110%;
        position: absolute;
        overflow: hidden;
        left: 0;
        top: 0;
        transition: 0.3s;
    } 
    .title,
    .desc { 
        position: absolute;
        top:50px;
        letter-spacing: 3px; 
        color: #fff;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
            0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
        // white-space: nowrap;
        overflow: hidden;
        opacity: 0;
    }
    // 右上角排列
    .title {
        top: 150px;
        right: 150px;
        width:50px;
        text-align: center; 
        font-size: 2em; 
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    .desc {
        top: 200px;
        width:30px;
        right: 200px; 
        text-align: center;
        font-size: 1.2em;
        color: lighten(@gray, 20%); 
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        
    }
    // 左中排列
    // .title {
    //     top: calc(50% - 40px);
    //     font-size: 2em;
    // }
    // .desc {
    //     top: calc(50% + 20px);
    //     font-size: 1.2em;
    //     color: lighten(@gray, 20%);
    // }
}
</style>