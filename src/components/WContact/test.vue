<template>
  <div id="app">
    <div class="contact">
      <WContact/>
    </div>
  </div>
</template>

<script>
import WContact from "@/components/WContact/WContact.vue" 
export default { 
  // 全局注册组件
  components : {
    WContact
  }
}

</script>

<style lang="less"> 
.contact{
  margin-top:100px;
  width: 250px;
  height: 300px;
  background: rgb(57, 57, 57);
}
</style>