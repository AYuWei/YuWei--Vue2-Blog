<template> 
    <ul class="right-list-container">
        <li
            v-for="(item, i) in list" 
            :key="i" 
        >
            <span>{{item.name}}</span> 
            <RightList :list="item.children" />
        </li>
    </ul> 
</template>
<script>
import WMenuTwo from "./WMenuTwo.vue"
export default {
    name : "RightList",
    props : {
        list : {
            type : Array,
            dafault: () => []
        }
    },
    components : {
        WMenuTwo
    }
    
}
</script>
<style lang="less" scoped>
.blog-component-container{ 
}
</style>