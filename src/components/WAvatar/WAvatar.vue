<!-- 
    头像组件
 -->
<template>
  <img 
    :src="url" 
    class="avatar-container"
    :style="{
        width: size + 'px',
        height: size + 'px',
    }"
  >
</template>

<script>
export default { 
    props : {
        url : {
            type : String , // url属性是一个字符串
            required : true , // 属性必传
        },
        size : {
            type : Number, // size 数字类型
            default : 150 , // 默认值为 150
        }
    }
}
</script>

<style >
    .avatar-container{
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }
</style>