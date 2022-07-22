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
              <router-view></router-view>
              <div>
                <p ref="para">some paragraph</p>
                <WTest ref="comp" />
                <button @click="handleClick">查看所有引用</button>
              </div>
          </template>
           
        </WLayout> 
    </div>
  </div>
</template>

<script>
import WLayout from "@/components/WLayout/WLayout.vue"; 
import WAside from "@/components/WAside/WAside.vue";
import WTest from "@/components/WTest/ChildComp.vue";

export default { 
  // 全局注册组件
  components : {
    WLayout,
    WAside,
    WTest
  },
  methods : {
     handleClick() {
      // 获取持有的所有引用
      console.log(this.$refs);
      // console.log(this.$refs.comp.a, this.$refs.comp.b);
      this.$refs.comp.a = 3;
      this.$refs.comp.b = 4;
      this.$refs.comp.m1();
      /*
        {
        	para: p元素（原生DOM）,
        	comp: ChildComp的组件实例
        }
        */
    },
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