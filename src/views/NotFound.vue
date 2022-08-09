<template>
  <div class="notfound-comtainer">
    <img :src="src" alt="">
  </div>
</template>

<script>
import imgSrc from "@/assets/error404.png"
export default {
    data() { 
        return {
            src:imgSrc
        }
    }
}
</script>

<style lang="less" scoped>


 
.notfound-comtainer{
    height:100%;
    width:100%; 
    background:#f6fff0;
    user-select: none; // 文本内容不可选中
}
img{
        position: absolute;
        top: 50%;
        margin-top: -125px;
        left: 50%;
        margin-left: -125px;
        height: 250px;
        width: 250px;
}
</style> 