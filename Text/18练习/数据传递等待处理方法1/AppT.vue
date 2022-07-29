<template>
    <div class="app-container">  
        <MChild @sevent="handleClick"/>
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
      handleClick(callback){ 
        setTimeout(() => {
          callback("粑粑收到到了哟！"); 
        },1000);
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