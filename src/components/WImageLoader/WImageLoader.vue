<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder"/>
    <img
      :src="src"
      :style="{ opacity:originOpacity , transition: `${duration}ms` }"
      @load="ImageLoad"
      alt=""
    />
  </div>
</template>

<script>
export default {
    props:{
          // 占位图片
            placeholder:{
                type:String,
                required:true
            },
            // 显示图片
            src:{
                type:String,
                required:true
            },
            // 动画
            duration:{
                type:Number,
                default:1000
            }
    },
    data(){
        return {
            originLoaded:false , // 原图是否加载完成
            everythingDone:false, // 是否一切都搞完了 则隐藏展位图片
        }
    },
    computed: {
        originOpacity() {
            return this.originLoaded ? 1 : 0;
        },
    },
    methods:{
        // 图片加载完成的事件方法
        ImageLoad(){
            this.originLoaded = true;
            setTimeout(()=>{
                this.everythingDone = true;
                this.$emit("load");
            },this.duration)
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container{
    width:100%;
    height: 100%; 
    overflow: hidden;
    position: inherit; 
    img{
        .self-fill();
        object-fit: cover;
    }
    .placeholder{
        // 设置模糊
        filter: blur(1vw);
    }
}

</style>