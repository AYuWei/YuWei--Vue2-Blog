// 方法防抖  返回一个函数
export default function( fn , duration = 100 ){
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, duration)
    }
}