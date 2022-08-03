/** 
 * 使用滚动条事件的组件必须设置 refValue 才能拿到容器 
 */
export default function(refValue){
    return {   
        mounted(){ 
            this.$bus.$on("setMainScroll", this.setMainScroll)
            // 给refValue元素注册一个滚动条监听事件 需要动态设置
            this.$refs[refValue].addEventListener("scroll", this.handleScroll)

        }, 
        beforeDestroy(){
            // 这里再次设置 toTop 是否显示
            this.$bus.$emit("mainScroll", undefined ); 
            this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
        }, 
        methods : {
            /* 触发 滚动条事件方法 */
            handleScroll(){ 
                this.$bus.$emit("mainScroll", this.$refs[refValue] );
            },
            // 设置滚动条高度
            setMainScroll(top){ 
                this.$refs[refValue].scrollTop = top;
            } 
        },
        destroyed(){
            this.$bus.$off("setMainScroll", this.setMainScroll)
        },
    }
}