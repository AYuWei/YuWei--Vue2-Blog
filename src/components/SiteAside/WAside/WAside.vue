<template>
    <div class="aside-container">
        <div class="aside-avatar">
            <WAvatar
                url="https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                :size="100"
            />
            <div class="author">
                Vue2_小小青柠蓝莓
            </div>
        </div>
        <WMenu /> 
        <WContact/>
    </div>
</template>

<script>
import WAvatar from "@/components/WAvatar/WAvatar.vue" 
import WContact from "@/components/SiteAside/WContact/WContact.vue" 
import WMenu from "@/components/SiteAside/WMenu/WMenu.vue" 
export default {
    components : {
        WAvatar,
        WContact,
        WMenu
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.aside-container{
    width: 100%;
    height:100%;
    padding: 20px 0;
    background:@dark;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
}
.aside-avatar{
    user-select: none; // 文字不可选中
    position: relative;
    width: 100%;
    height: 230px; 
    .avatar-container{ 
        top:50px;
        left:50%;
        margin-left: -50px;
        position: absolute;
    }
    .author{
        position: absolute;
        width: 100%;
        top: 170px;
        font-size: 20px; 
        text-align: center; 
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        color:@wheat;
    }
}

</style>