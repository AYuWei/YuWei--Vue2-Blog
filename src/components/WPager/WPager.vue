<!-- 
    导航切换按钮
 -->
<template>
    <div class="pager-container">
        <!-- 上一页 第一页 -->
        <a @click="headleClick(1)" :class="{ disabled : current === 1 }">
            |&lt;&lt;
        </a>
        <a @click="headleClick(current - 1 )"  :class="{ disabled : current === 1 }">
            &lt;&lt;
        </a>

        <!-- 内容页面 -->
        <a 
            v-for="(n,i) in numberlis" 
            :key="i"
            @click="headleClick( n )" 
            :class="{ active : n === current }"
        >
            {{ n }}
        </a>
        

        <!-- 下一页 最后一页 -->
        <a @click="headleClick(current+1)" :class="{ disabled : current === pageNumber }">
            &gt;&gt;
        </a>
        <a  @click="headleClick(pageNumber)" :class="{ disabled : current === pageNumber }">
            &gt;&gt;|
        </a>
    </div>
</template>


<style lang="less" scoped> 
// 引用颜色变量
@import "~@/styles/var.less"; 
.pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a{
        color: @success;
        margin: 0 6px;
        cursor: pointer; // 鼠标样式
        text-decoration: none;
        &.disabled{
            color: @gray;
            cursor: not-allowed; // 静止点击的样式
        }
        &.active{
            color: @wheatBlog;
            font-weight: bold;
            cursor: text;
        }
    }
}

</style>

<script> 
export default {
    props:{
        // 当前页码
        current:{
            type: Number,
            default : 1,
        },
        // 数据总量
        total:{
            type: Number,
            default : 0,
        },
        // 页容量
        limit:{
            type: Number,
            default : 10,
        },
        // 可见页码数
        visibleNumber:{
            type: Number,
            default : 10,
        },
    }, 
    // 计算属性
    computed:{
        // 总页数
        pageNumber(){
            return Math.ceil( this.total / this.limit );
        },
        // 得到显示的最小数字
        visibleMin(){
            let min = this.current - Math.floor( this.visibleNumber / 2 );
            if(min < 1) min = 1;
            return min;
        },
        // 得到显示的最大数字
        visibleMax(){
            let max = this.visibleMin + this.visibleNumber - 1 ;
            if(max > this.pageNumber ) max = this.pageNumber;
            return max;
        },
        // 显示的数字
        numberlis(){
            let nums = [];
            for( let i = this.visibleMin ; i <= this.visibleMax ; i ++){
                nums.push( i );
            }
            return nums;
        }
    },
    methods:{
        headleClick(newPage){
            if( newPage < 1 ) newPage = 1;
            if( newPage > this.pageNumber ) newPage = this.pageNumber;
            if( newPage === this.current )  return;
            // 抛出一个事件 、 给父级处理 $emit
            this.$emit("pageChange", newPage); 
        }
    }
}
</script>
