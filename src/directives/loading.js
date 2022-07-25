import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

// 得到el中loading效果的img元素
function getLoadingImage(el){
    return el.querySelector("img[data-role=loading]");
}

// 创建一个img dom元素
function createElementeImgDom(){
    const imgDom = document.createElement("img");
    imgDom.dataset.role = "loading";
    imgDom.src = loadingUrl;
    imgDom.className = styles.loading;
    return imgDom;
}
/**
 * 
 * @param {\} el 拿到dom元素
 * @param {*} binding  可以拿到传递过来的值， 我们这里使用 value 是否加载完成
 */ 
export default function( el , binding ){
    const curImg = getLoadingImage(el); // 判断是否页面上已经创建
    // 根据 binding.value 的值，决定创建或删除img元素
    if( binding.value ){
        if(!curImg){
            const img = createElementeImgDom();
            el.appendChild(img);
        }
    } else {
        if( curImg ){
            curImg.remove();
        }
    }
}