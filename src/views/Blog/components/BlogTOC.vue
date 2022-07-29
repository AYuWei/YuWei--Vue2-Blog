<!-- 单个文章导航列 -->
<template>
  <div class="blog-toc-container">
      <WRightList :list="list"  @select="handleSelect" />
  </div>
</template>

<script> 
import WRightList from "./WRightList.vue";
export default {
  props : {
    list:{
      type : Array,
      dafault: () => []
    },
  },  
  components : {
    WRightList
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
  },
}
</script>

<style>

</style>