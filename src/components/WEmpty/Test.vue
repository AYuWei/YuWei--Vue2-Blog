<template>
      <div  class="app-container" >
           <MyEmpty title="title"/>
      </div>
</template>

<script>
import MyEmpty from "@/components/MyEmpty/MyIndex.vue"
export default {  
    data(){
      return {
        title:"暂无数据~",
      }
    },
    components:{
        MyEmpty
    }
}
</script>

<style scoped lang="less">
  .app-container{
    width: 400px;
    height:200px;
    border:1px solid black; 
    // background:black;
    position:relative;  
  }
</style>