<template>
  <div id="app">
    <div class="contact"> 
      <WMenuTwo title="JavaScript(ES6+)" :child='["Object.defineproperty","Object.assign","Object.setPrototypeof","Object.is"]' />
      <WMenuTwo title="HTML5" :child='["localStorage","sessionStorage","Cookie"]' />
      <WMenuTwo title="CSS3" :child='["box-shadow","border-image","overFlow"]' />
    </div>
  </div>
</template>

<script>
import WMenuTwo from "@/components/WMenuTwo/WMenuTwo.vue" 
export default { 
  // 全局注册组件
  components : {
    WMenuTwo
  }
}

</script>

<style lang="less"> 
.contact{
  margin-top:100px;
  width: 250px;
  height: 300px;
  background: rgb(163, 163, 163);
}
</style>