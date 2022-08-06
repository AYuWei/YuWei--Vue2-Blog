<template>
    <div class="contact-container"> 
        <ul>
            <li>
               <a href="">
                    <div class="icon">
                        <WIcon type="github" />
                    </div>
                    <span>{{data.githubName}}</span>
               </a>
            </li>
             <li>
               <a :href="data.mail">
                    <div class="icon">
                        <WIcon type="mail" />
                    </div>
                    <span>{{data.mail}}</span>
               </a>
            </li>
            <li>
               <a href="">
                    <div class="icon weixin">
                        <WIcon type="weixin" />
                    </div>
                    <span>{{data.weixin}}</span>
               </a>
               <div class="pop">
                    <img
                        :src="data.weixinQrCode"
                        alt=""
                    />
                </div>
            </li>
             <li>
               <a href="">
                    <div class="icon">
                        <WIcon type="qq" />
                    </div>
                    <span>{{data.qq}}</span>
               </a>
               <div class="pop">
                    <img
                        :src="data.qqQrCode"
                        alt=""
                    />
                </div>
            </li>
            
        </ul>
    </div>    
</template>
<script>  
import WIcon from "@/components/WIcon/WIcon";
import imageSrcW from "@/Images/weixin.jpg";
import imageSrcQ from "@/Images/qq.jpg";
// import WIcon from "@/components/WIcon/WIcon.vue";
import "@/styles/global.less";
import { mapState } from 'vuex';
export default{
    components:{
        WIcon
    },
    computed:mapState("setting", ["data"]),
    data(){
        return {
            imageSrcW,
            imageSrcQ
        }
    }
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container{  
    padding: 10px;
    widows: 100%;
    // background: rgb(80, 80, 80); 
    color: @wheat;  
    @lineHeight : 30px;  
    li{
        margin: 10px 5px;
        position: relative;
        &:hover {
            .pop {
                transform: scaleY(1);
            }
        }
    }
    a{   
        height: @lineHeight;
        display: flex;  
        span{
            padding: 0px 5px;
            font-size: 14px;
            height: @lineHeight;
            line-height: @lineHeight; 
        }
        &:hover{
            color:@gray;
        }
    }
    .icon{
        font-size: 24px;
        &.weixin{
            font-size:29px;
            text-indent: -3px;
            line-height: @lineHeight;
        }
    }
    .pop{
        position: absolute;
        top:-135px; 
        left:10px;
        width: 110px;
        height: 110px;
        padding:10px;
        border-radius: 3px;
        background: white;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: 0.3s;
        img{
            width: 100%;
            height:100%;
        }
        &::after {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
            width: 8px;
            height: 8px;
            background: #fff;
            bottom: -4px;
        }
    }
}
</style>  