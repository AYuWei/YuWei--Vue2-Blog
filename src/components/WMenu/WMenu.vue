<template>
    <div class="menu-container">
        <router-link 
            v-for="item in items"
            :key="item.name"  
            :to="{name:item.name}"
        >
            <div class="icon">
                <WIcon :type="item.icon"></WIcon>
            </div>
            <span>{{item.title}}</span>
        </router-link> 
    </div>
</template>
<script>
import WIcon from "@/components/WIcon/WIcon.vue"
export default {
    props : {
        
    },
    data(){
        return {
            items :  [
                {   
                    name:"Home", 
                    title : "首页",
                    icon : "home", 
                },
                {
                    name:"Blog", 
                    title : "文章",
                    icon : "blog",  
                },
                {
                    name:"About", 
                    title : "关于我",
                    icon : "about", 
                },
                {
                    name:"Project", 
                    title : "项目&效果",
                    icon : "code", 
                },
                {
                    name:"Message", 
                    title : "留言板",
                    icon : "chat", 
                },
            ]
        }
    },
    components:{
        WIcon
    },
    methods:{
       isSelected(item) {
            var link = item.link.toLowerCase(); // 菜单的链接地址
            var curPathname = location.pathname.toLowerCase(); // 当前浏览器的访问路径
            if (item.startWith) {
                return curPathname.startsWith(link);
            } else {
                return curPathname === link;
            }
        },
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.menu-container{
    color:@wheat; 
    a{
        &.selected{
            background: darken(@words, 3%);
            color:@gray;
        }
        display: flex;
        padding: 0px 30px;
        align-items: center;
        height: 40px;
        .icon{
            width: 24px;
        }
        &:hover {
            background: darken(@words, 3%);
            color:@gray;
        }
    }
}


</style> 