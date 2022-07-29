<template>
    <div class="app-container">  
        <MChild :click="handleClick"/>
    </div> 
</template>

<script> 
import MChild from "./MChild.vue"; 
export default {  
    components:{
    MChild, 
},
  created(){
 
  },
  methods : {
      async handleClick(){ 
        return new Promise((resolve)=>{
          setTimeout(()=>{
            resolve("有一个未知错误！");
          },1000)
        })
      }
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
</style>