import showMessage from "@/utils/showMessage";
import axios from "axios";
// import showMessage from "@/utils/showMessage";

// 创建一个axios实例
const ins = axios.create();

// 使用实例来监听数据
// 请求过来的数据都会执行下面方法
ins.interceptors.response.use(function(resp){
    if( resp.data.code !== 0 ){
        showMessage({
            content : resp.data.msg,
            type : "error",
            duration : 1500,
        })
        return null;
    } 
    return resp.data.data;
})

export default ins;