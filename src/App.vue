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
              <div id="test">123</div>
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
    console.log("挂在完成！")
    this.$showMessage({
      content : "好棒棒呀~",
      type : "info",
      duration:2000,
      callback : function(){
        console.log("完蛋~")
      }

    })
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