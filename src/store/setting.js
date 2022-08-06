// 全局设置
import { getSetting } from "@/api/setting"
import { titleController } from "@/utils"
export default {
    namespaced : true,
    state : {
        isLoading: false,
        data: null,
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
        async fetchSetting(ctx){
            console.log("---111---")
            
            ctx.commit("setLoading", true);
            const resp = await getSetting();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
            console.log("---222---", resp)
            // favicon 头部标题logo
            if (resp.favicon) {
                // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
                let link = document.querySelector("link[ref='icon']");
                if (link) {
                  return;
                }
                console.log("link", link)

                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = resp.favicon;
                document.querySelector("head").appendChild(link);
            }
            // 设置网站标题
            if(resp.siteTitle){
                titleController.setSiteTitle(resp.siteTitle)
            }
        }
    }
}