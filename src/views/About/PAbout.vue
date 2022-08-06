<template>
    <div class="about-container" v-loading="isLoading || !srcLoading">
        <iframe 
            class="about-content"
            frameborder="0"
            @load="srcLoading = true"
            :src="src"></iframe>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
    data(){
        return {
            srcLoading : false, // 网页是否加载完成
        }
    },
    // 开始前触发请求事件
    created(){
        this.$store.dispatch("about/fetchAbout")
    },
    computed : mapState("about",{
        isLoading : "isLoading",
        src : "data"
    })
}
</script>
<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>