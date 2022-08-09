<!-- 
    在文章评论 + 整体评论中
    都需要使用到这个的发表评论的数据
    则：这边就将这个评论组件抽离出来
    分为两个三个区域
    评论内容的区域
 -->
 <template>
   <div class="message-index"> 
      <!-- 表单列表 -->
      <MegFormData v-on="$listeners"/>
      <!-- <MegFormData @submit="handleSubmit"/> -->
      <!-- 标题 -->
      <h2>
        {{Title}}
        <span>{{ subTitle }}</span>
      </h2>
      <!-- 评论列表 -->
      <MegListData :list="list"/>
      <div class="loading"  v-loading="isListLoading" ></div>
   </div>
 </template>
 
 <script>
 import MegFormData from "./MsgFormData.vue";
import MegListData from "./MsgListData.vue";
 export default {
  components : {
      MegFormData,
      MegListData
  },
  props : {
    // 标题
    Title : {
      type : String,
      default : "",
    },
    subTitle : {
      type : String,
      default : ""
    },
    list : {
      type : Array , 
      default : () => []
    },
    // 评论列表是否在加载中
    isListLoading : {
      type : Boolean, 
      default : false,
    }
  },
  methods : {
    // handleSubmit(formData,callback){
    //   console.log("我是MegFormData的爹地！", formData, callback);
    //   this.$emit("submit", formData, callback );
    // }
  }
 }
 </script>
 
 <style lang="less" scoped>
 .message-index{
  margin: 20px;
 }
 h2{ 
 }
 .loading{
    position: relative;
    height: 40px;
 }
 </style>