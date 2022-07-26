<template>
  <div id="app">
    <div class="contact"> 
     <WMenu /> 
    </div>
  </div>
</template>

<script>
import WMenu from "@/components/WMenu/WMenu.vue" 
export default { 
  // 全局注册组件
  components : {
    WMenu
  }
}

</script>

<style lang="less"> 
.contact{
  margin-top:100px;
  width: 250px;
  height: 300px;
  background: rgb(163, 163, 163);
}
</style>