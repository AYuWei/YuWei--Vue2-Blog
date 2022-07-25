<template>
  <div class="app-container"> 
        <WLayout>
          <template #left>
            <div class="aside">
              <WAside />
            </div>
          </template>
          <template #default> 
              <router-view></router-view> 
          </template>
           
        </WLayout> 
    </div> 
</template>

<script>
import WLayout from "@/components/WLayout/WLayout.vue"; 
import WAside from "@/components/WAside/WAside.vue";  
export default { 
  // 全局注册组件
  components : {
    WLayout,
    WAside, 
  },
  created(){
 
  },
  methods : {
      
  }
}

</script>

<style lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
#test{
  width: 500px;
  height:500px;
  border: 1px solid black;
} 
.app-container {
  .self-fill(fixed);
}
.aside{
  width:250px;
  height: 100%;
}
</style>