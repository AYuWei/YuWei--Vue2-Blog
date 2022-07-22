<template>
    <div class="menu-container">
        <div class="menu" 
            :style="{'line-height':`${height}px`}" 
        >
            <div class="menu_title" v-on:click="changeActive()">
                <div class="menu_title_left">
                    <WIcon :type="Icon"></WIcon>
                    <span>{{title}}</span>
                </div>
                <div class="menu_title_right" v-if="childlength" 
                    :style="{
                        'transform' : `rotateZ(${rotate}deg)`,
                        'transition' : '0.3s'
                    }"
                > 
                    <WIcon type="arrowUp" />
                </div>
            </div>  
            <div :style="{
                'height':`${childHeight}px`,
                'overflow':'hidden',
                'transition' : '0.3s',
                'overflow-y' : 'auto'
            }" class="menu_child" >
                <div class="menu_child_item" v-for="(item,index) in child" :key="index">
                    <a href="">
                        {{item}}
                    </a>
                </div>  
            </div> 
        </div>
    </div>
</template>
<script>
import WIcon from "@/components/WIcon/WIcon.vue"
export default {
    props : {
        title : {
            type : String,
            required : true
        },  
        // menu 高度 非必传
        height : {
            type : Number , // 菜单的高度：width默认和父级一样 
            default : 40
            // required : true , // 属性必传
        }, 
        // 图标
        Icon : {
            type : String,
            default : "code"
        },
        // menu 子元素 非必传
        child : {
            type : Array, // Array 数组类型
            default : function(){
                return []
            } , // 默认值为 [] 没有子集
        }
        
    },
    components:{
        WIcon
    },
    computed:{
        // 子元素的长度
        childlength(){ 
            if(this.child.length == 0) return false;
            return true;
        },  
    },
    data:function(){
        return { 
            childHeight:0,
            childActive:false, // 是否点击
            rotate:0,
        }
    },
    methods:{
        // 点击子元素 向下展开 改变状态
        changeActive(){ 
            // this.childActive = !this.childActive;
            
            if(this.childHeight == 0){
                // this.childHeight = this.child.length * 40;
                this.childHeight = 160;
                this.rotate = 180;
            } else {
                this.childHeight = 0;
                this.rotate = 0;
            }
            console.log("被点击",this.childHeight,this.child.length,this.rotate)
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.menu{
    position: relative;
    // border:0.1px solid @lightWords;
    box-shadow: 0.1px 0.1px 1px rgb(168, 168, 168);
    box-sizing: border-box;
    cursor: context-menu;
    user-select: none;
}
.menu_title{ 
    justify-content: space-between;
    padding: 0px 15px;
    background:@dark;
    color:@wheat;
    display: flex; 
    .menu_title_right{
        text-align:right;
    }
    .menu_title_left span{
        padding: 0px 7px;
    }
}
.menu_child{
    scroll:"no";
    ::-webkit-scrollbar-track{
        background:red
    }
    -webkit-scrollbar-thumb{
        background:yellow;
    }
}
 
 &.menu_child_item{ 
    height:40px;
    overflow: hidden;
 
    line-height:40px;
    padding-left:25px;
    color:@gray;
    background:@words1;  
    &:hover{
        background:@words;
        a{
            color:@wheat;
        }
    }
} 

</style> 