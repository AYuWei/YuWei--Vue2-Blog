<template>
    <img class="loading-container" :src="wloading" alt="">    
</template>
<script>
import wloading from "@/assets/loading.svg";
export default {
    data(){
        return {
            wloading
        }
    }
}
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
.loading-container{
    .self-center()
}
</style>