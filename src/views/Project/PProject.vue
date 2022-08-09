<template>
    <div class="project-container"  ref="projectContainer" v-loading="isLoading">
        <div class="project-item" v-for="item in data" :key="item.id">
            <a href="">
                <img class="thumb" v-lazy.src="item.thumb" alt="">
            </a>
            <div class="info">
                <div class="title">
                    <h2>
                        <a href="">
                            {{item.name}}
                        </a>
                    </h2> 
                </div>
                <div class="github" v-if="item.github">
                    <MyIcon type="github" />
                    <a  target="_blank"
                        :href="item.github" 
                    >{{item.github}}</a>
                </div>
                <p class="content" v-for="(project, i) in item.description" :key="i+'project'">{{ project }}</p>
            </div>
        </div>
        
    </div>
</template>
<script>

import MyIcon from "@/components/WIcon/WIcon.vue";
import { mapState } from 'vuex';
import setMainScroll from "@/mixin/setMainScroll.js"
export default{
    mixins:[setMainScroll("projectContainer")],
    computed : mapState("project",["isLoading", "data"]),
    created(){
        this.$store.dispatch("project/fetchProject"); 
    },
    components : {
        MyIcon
    },
    mounted(){ 
        console.log("数据",this.data);
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.project-container{
    position:relative; 
    height:100%;
    overflow-y: auto;
    padding: 20px;
    box-sizing: border-box;
    scroll-behavior: smooth;
 
    .project-item{
        display: flex; 
        box-sizing: border-box;
        padding:10px;
        margin:11px 0px;
        overflow: hidden;
        transition-duration: 300ms;
        border-bottom: 2px dashed #ece2e2;;
        border: 2px dashed #ece2e2;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 30px;
        &:hover{
            box-shadow: 0px 0px 8px @words;
            cursor:pointer;
            border-radius: 8px; 
            border-top-left-radius: 30px; 
            border-bottom-right-radius: 30px;
        }
        img{
            width:250px;
            height:150px; 
            flex: 0 0 auto;
            object-fit: cover;
            border-radius: 5px;
            transition-duration: 300ms; 
            margin-right:15px;
            &:hover{
                transform: scale(1.04);
            }
        }
    }
}
.title{
    display: flex; 
    align-items: center;
    h2{
        margin:0px;
        a{ 
            line-height: 1.2em;
            display:inline-block;
            color: lighten(@words, 10%); 
            transition-duration: 300ms; 
            &:hover{
                color: darken(@words, 40%);
            }
        }
    }
    span{
        padding: 15px;
        margin-top: 8px;
    }
}
.github{
    color: lighten(@words, 40%); 
    margin-top: 8px;
    a{
        padding:0px 5px;
        &:hover{
            color:@wheatBlog;
        }
    }
    &:hover{
        color:@wheatBlog;
    }
}
.content{
    margin:8px 0px;
}
</style>