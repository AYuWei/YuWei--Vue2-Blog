<template>
    <div class="blog-container"> 
        <WLayout> 
            <template #default></template>
            <template #right>
                <div class="right-list">
                    <WRightList :list="list" @select="handleSelect" />
                </div>
            </template>
        </WLayout>
    </div>
</template>
<script> 
import WRightList from "./components/WRightList.vue";
import WLayout from "@/components/WLayout/WLayout.vue";
export default {
    components:{ 
        WRightList,
        WLayout
    },
    methods : {
        handleSelect(item){
            console.log("WRightList", item.name, item)
        }
    },
    data(){
        return {
            list : [
                {
                    name : "Ajax", // 名字
                    isSelect : false , // 选中状态
                },
                {
                    name : "axios", // 名字
                    isSelect : false , // 选中状态
                }
                ,
                {
                    name : "JavaScript（ES6+）", // 名字
                    isSelect : true , // 选中状态
                    children : [
                        {
                            name : "新增Object API", // 名字
                            isSelect : true , // 选中状态
                            children : [
                                {
                                    name : "Object.is", // 名字
                                    isSelect : false , // 选中状态
                                },
                                {
                                    name : "Object.assign", // 名字
                                    isSelect : false , // 选中状态
                                },
                                {
                                    name : "Object.getOwnpropertyNames", // 名字
                                    isSelect : false , // 选中状态
                                },
                                {
                                    name : "Object.setPrototypeof", // 名字
                                    isSelect : false , // 选中状态
                                }
                            ]
                        },
                        {
                            name : "字符串 API",
                            isSelect : false,
                            children : [
                                {
                                    name : "includes()", // 名字
                                    isSelect : false , // 选中状态
                                },
                                  {
                                    name : "startsWith()", // 名字
                                    isSelect : false , // 选中状态
                                },
                                  {
                                    name : "endsWith()", // 名字
                                    isSelect : false , // 选中状态
                                },
                                  {
                                    name : "repeat()", // 名字
                                    isSelect : false , // 选中状态
                                }
                            ]
                        }
                    ]
                }, 
                {
                    name : "CSS3", // 名字
                    isSelect : false , // 选中状态
                    children : [
                        {
                            name:"box-shadow",
                            isSelect : true,
                        },
                        {
                            name:"text-shadow",
                            isSelect : false,
                        },
                        {
                            name:"border-image",
                            isSelect : false,
                        },
                    ]
                },
                {
                    name:"HTML5",
                    isSelect : true,
                },
                {
                    name:"Promise",
                    isSelect : true,
                }, 
                {
                    name:"sessingStorage",
                    isSelect : true,
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.blog-container { 
    .right-list{
        border: 1px solid black;
        width: 250px;
    }
}

</style>