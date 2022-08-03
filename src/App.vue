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
        <ToTop /> 
    </div> 
</template>

<script>
import WLayout from "@/components/WLayout/WLayout.vue"; 
import WAside from "@/components/SiteAside/WAside/WAside.vue";
import ToTop from "./components/ToTop/ToTop.vue";  
export default { 
  // 全局注册组件
  components : {
    WLayout,
    WAside,
    ToTop
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
.app-container {
  .self-fill(fixed);
  .layout-container{
    .main{
      // background:@words;
    }
  }
}
.aside{
  width:250px;
  height: 100%;
} 
</style>