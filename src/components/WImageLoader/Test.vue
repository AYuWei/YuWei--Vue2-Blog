<template>
      <div  class="app-container" >
           <MyImageLoader 
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
            placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
            :duration=1000
            @load="ImageLoad"
           />
      </div>
</template>

<script>
import MyImageLoader from "@/components/MyImageLoader/MyIndex.vue"
export default {  
    
    components:{
        MyImageLoader
    },
    methods:{
      ImageLoad(){
        console.log("加载完成")
      }
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