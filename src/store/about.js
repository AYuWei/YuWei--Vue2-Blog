import { getAbout } from "@/api/about"
export default{
    // 严格模式开启
    namespaced: true,
    state:{
        isLoading : false,
        data : ''
    },
    mutations : {
        setLoading(state, payload){
            state.isLoading = payload;
        },
        setData(state, payload){
            state.data = payload;
        }
    },
    actions : {
        async fetchAbout(ctx){
            console.log( "关于我：", ctx.state.data )
            if(ctx.state.data) {
                return; 
            } //  有值就直接返回
            console.log( "挺！！！", ctx.state.data ) 
            ctx.commit("setLoading", true);
            const resp = await getAbout();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
        }
    }   

}