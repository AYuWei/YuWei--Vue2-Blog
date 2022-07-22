<template>
  <div id="app">
    <div class="contact"> 
        <WLayout>
          <template #left>
            <div class="aside">
              <WAside />
            </div>
          </template>
          <template #default> 
          </template>
           
        </WLayout> 
    </div>
  </div>
</template>

<script>
import WLayout from "@/components/WLayout/WLayout.vue"; 
import WAside from "@/components/WAside/WAside.vue"
export default { 
  // 全局注册组件
  components : {
    WLayout,
    WAside,
  }
}

</script>

<style lang="less">
@import "~@/styles/var.less";
#app{
  position:fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .contact{
    width: 100%;
    height: 100%;
  }
}
.aside{
  width:250px;
  height: 100%;
}
</style>