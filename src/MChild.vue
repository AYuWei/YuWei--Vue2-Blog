<template>
  <div class="child">
    <button @click="handleClick" :disabled="isLoading">
        {{ isLoading ? "loading" : "submit" }}
    </button>
    <div class="err">{{ error }}</div>
  </div>
</template>

<script>
export default {
    
    data(){
        return {
            count : 0,
            isLoading : false,
            error : "",
        }
    },
    methods : {
        async handleClick(){
           this.count += 1;
           this.error = "";
           this.isLoading = true;
            console.log(this.$listeners)
            if(this.$listeners.clickONE){
                const err = await this.$listeners.clickONE();
                this.error = err;
                this.isLoading = false;
            }
        },
    }
}
</script>

<style>
.child{
    margin-left:50%;
    top:100px;
    position:relative;
}
.err{
    color:red;
    font-size:14px;
}
</style>