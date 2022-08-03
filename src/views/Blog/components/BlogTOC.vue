<!-- 单个文章导航列 -->
<template>
  <div class="blog-toc-container">
      <WRightList :list="tocWithSelect"  @select="handleSelect" />
  </div>
</template>

<script> 
import WRightList from "./WRightList.vue";
import debounce from "@/utils/debounce";
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
  data(){
    return {
      activeAnchor:"", // 锚点、判断是否选择样式选择增加样式的锚点
    }
  },
  /*
    1：获取TOC中所有的目录id、然后存储起来【拿到id可以锚点定位到具体的位置】
    2：拿到TOC目录后拿到页面中所有对应的id dom元素
    3：判断所有dom元素在页面中的距离、给传递过来的数据list增加active类名
  */
 computed : {
    /* 
      第一步、拿到TOC中所有目录的id 
      根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    */
   tocWithSelect() {
    const getToc = ( list = [] ) => {
      return list.map( (t) => ({
        ...t,
        isSelect : t.anchor === this.activeAnchor,
        children : getToc( t.children )
      }))
    }
    return getToc( this.list );
  },
   /*
      第二步：拿到TOC目录后拿到页面中所有对应的id dom元素
   */
  doms(){
    const doms = [];
    const addToDoms = (list) => {
      for( const t of list ){
        doms.push( document.getElementById( t.anchor ) ); // 获取元素加入数组中
        if( t.children && t.children.length ){
          addToDoms( t.children );
        }
      }
    }
    addToDoms( this.list );
    return doms;
  },
  /*
    第三步: 判断所有dom元素在页面中的距离、给传递过来的数据list增加active类名
    用事件总线来判断滚动条滚动的距离 事件名
  */
 },
 created(){
  this.setSelectDebounce = debounce(this.setSelect, 50)
  // 注册监听滚动事件
  this.$bus.$on("mainScroll", this.setSelectDebounce)
 },
 destroyed(){
  // 销毁监听滚动事件
  this.$bus.$off("mainScroll", this.setSelectDebounce)
 },
  mounted(){
    console.log("TOC列表", this.tocWithSelect )
    console.log("Dom列表", this.doms )
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    /* 获取元素距离顶部的距离 */
    setSelect(){
      this.activeAnchor = "";
      const range = 200; // 距离顶部的距离
      for( const dom of this.doms ){
        if( !dom ) continue; // 跳出这个循环
        const top = dom.getBoundingClientRect().top;
        /*
          定义在0-200内就是默认激活状态的
        */
        if( top >= 0 && top <= range ){
          this.activeAnchor = dom.id;
          return;
        } else if( top > range ) {
          // 还在下方不用激活
          return;
        } else {
          // 在规定的上方
          this.activeAnchor = dom.id; 
        }
      }
    }
  },
}
</script>

<style>

</style>