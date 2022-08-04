<template>
  <div class="formData-container" ref="comtainer"  id="data-form-container">
    <form action="" @submit.prevent="handleSubmit">
      <!-- 用户昵称 -->
      <div class="form-item">
        <!-- 文本输入 -->
        <div class="form-nickname">
          <!-- 用户昵称输入 -->
          <input type="text" v-model.trim="formData.nickname" maxlength="10" placeholder="用户昵称">
          <!-- 数字显示输出 -->
          <div class="tip">{{ formData.nickname.length }}/10</div>
        </div>
        <!-- 错误提示 -->
        <div class="form-err">
          {{ errorData.nickname }}
        </div>
      </div>
      
      <!-- 评论内容 -->
      <div class="form-item">
        <!-- 文本输入 -->
        <div class="form-content">
          <!-- 用户昵称输入 -->
          <textarea name="" v-model.trim="formData.content" id="" maxlength="300" placeholder="输入评论内容"></textarea>
          <!-- 数字显示输出 -->
          <div class="tip">{{ formData.content.length }}/300</div>
        </div>
        <!-- 错误提示 -->
        <div class="form-err">
          {{ errorData.content }}
        </div>
      </div>

      <!-- 提交按钮 -->   
      <button class="sub" :disabled="isSubmiting">
          {{  isSubmiting ? "提交中..." : "发表"}}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 文本输入内容
      formData : {
          nickname : "",
          content : ""
      },
      // 输入框提示按钮
      errorData : {
          nickname : "",
          content : "",
      },
      isSubmiting : false,
    }
  },
  methods : {
    handleSubmit(){  
      this.errorData.nickname = this.formData.nickname ? "" : "请填写昵称";
      this.errorData.content = this.formData.content ? "" : "请填写内容";
      // 如果有错误 则直接返回
      if( this.errorData.nickname || this.errorData.content ) return ; 
      // 没错误则设置isSubmiting防止重复点击
      this.isSubmiting = true;
      // 1.将事件抛给父组件来处理事件 
      // 2.父组件处理完成后则执行回调出来本身事件
      this.$emit("submit", this.formData, (successMsg)=>{  
        this.$showMessage({
          content : successMsg,
          type : "success",
          duration : 1000,
          container : this.$refs.comtainer,
          callback : ()=>{
            this.isSubmiting = false;
            this.formData.nickname = "";
            this.formData.content = "";
          }
        }) 
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "@/styles/var.less";

.formData-container{
  height:100%;
  width:100%;
  padding-top: 20px;
}
.form-item{
  // margin: 5px; 
}
input, textarea{
    letter-spacing: 1px;
    outline: none; // 轮廓线 
    padding: 0px 15px;
    font-size: 18px; 
    border: 1px dashed lighten(@words, 30%);
    border-radius: 5px; 
    box-sizing: border-box;
    &:focus{ 
      border-color:@primary;
    } 
}
.form-nickname{
  position : relative;
  height:40px;
  width: 50%;
  input{
    width:100%;
    height:100%;
  }
  .tip{
    position:absolute;
    bottom: 3px;
    font-size: 12px;
    right: 10px;
    color:@gray;
  }
}
.form-err{
  color:@danger;
  line-height:30px; 
  height:30px;
  font-size: 15px; 
}
.form-content{
  position : relative; 
  height:120px;
  line-height: 1em;
  width:100%;
  textarea{
    padding: 8px 15px;
    height: 100%;
    width:100%;
    resize: none;
  }
  .tip{
    position:absolute;
    bottom: 3px;
    font-size: 12px;
    right: 10px;
    color:@gray;
  }
}
.sub{
  background: lighten(@primary,10); 
  border: none;
  margin: 5px 0px;
  border-radius: 4px;
  height: 30px;
  width: 100px;
  color:@fff; 
  &:hover{
    background: @primary;  
    cursor: pointer;
  }
}

// .formData-container{
//   width : 100%;
//   .form-area{
//     width : 100%;
//     height: 70px;
//   }
// }
//   input, textarea{
//         outline: none; // 轮廓线 
//         padding: 0px 15px;
//         font-size: 18px;
//         width: 300px;
//         border: 1px dashed lighten(@words, 30%);
//         border-radius: 5px; 
//         box-sizing: border-box;
//         &:focus{ 
//           border-color:@primary;
//         } 
//   }
//   input {
//     height:40px;
//   }
//   .form-nickname{
//     height: 40px; 
//     position: relative;
//     width: 300px;
    
//     .tip{
//       position:absolute;
//       font-size: 12px;
//       right:4px;
//       bottom:2px;
//       color:@gray;
//     } 
//   }
//    textarea{
//       padding:8px 15px;
//       height: 120px;
//       width:500px;
//       resize: none;
//     }
//   .form-content{
//     height:100px;
//     position: relative;
//     width:500px;
//     .tip{
//       position:absolute;
//       font-size: 12px;
//       right:4px;
//       bottom:2px;
//       color:@gray;
//     }
//   }
//   .form-err{
//     line-height: 30px;
//     font-size: 14px;
//     align-content: center;
//     color:@danger;
//   }
//   .form-item{
//     width:100%;
    
//   }
</style> 