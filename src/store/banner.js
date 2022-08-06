/**
 * 主页数据
 * isLoading,data=[]数据
 */
import { getBanners } from "@/api/banner";
export default {
    namespaced : true,
    state : {
        isLoading : false,
        data : []
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
        async fetchBanner(ctx){
            // 如果有数据则直接返回
            if(ctx.state.data.length) return ;
            // 没有数据则请求数据
            ctx.commit("setLoading", true) ;
            const resp = await getBanners (); 
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
        }
    }
    
}
