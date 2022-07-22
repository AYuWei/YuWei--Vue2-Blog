<template>
    <div>
         <MyPager 
            @pageChange="PagerChange($event)" 
            :current="current" 
            :total="total"
            :limit="limit"
            :visibleNumber="visibleNumber"
        />
    </div>
</template>

<script>
import MyPager from "./MyIndex.vue";

export default {
    name:"MyPager",
    data : function(){
        return {
            current:2,
            total:200,
            limit:10,
            visibleNumber:10
        }
    },
    components:{
        MyPager
    },
    methods:{
        PagerChange(newPage){
            this.current = newPage; 
        }
    }
}
</script>

<style>

</style>