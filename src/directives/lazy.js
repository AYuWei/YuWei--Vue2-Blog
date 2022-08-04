/*
    图片懒加载
*/

// 引入事件总线
import eventBus from "@/eventBus";
// 引入防抖
import { debounce } from "@/utils";
// 引入图片
import defaultGif from "@/assets/default.gif";

// 存放图片的数组
let imgs = [];

export default {
    inserted(el, bindings){
        // console.log("图片懒加载", el , bindings);
        const img = {
            dom : el,
            src : bindings.value
        };
        imgs.push( img ); 
        // 立即处理它
        setImage(img);
    },
    unbind(el){
        console.log("unbind", el)
    }
}

function setImage(img){
    img.dom.src = defaultGif;// 暂时使用默认图片
    // 处理图片
    // 该图片在可视范围内
    const clientHeight = document.documentElement.clientHeight;
    const recDom = img.dom.getBoundingClientRect();
    const height = recDom.height || 150;
    if (recDom.top >= -height && recDom.top <= clientHeight) {
        // 在视口范围内
        const tempImg = new Image();
        tempImg.onload = function() {
          // 当真实图片加载完成之后
          img.dom.src = img.src;
        };
        tempImg.src = img.src;
        // img.dom.src = img.src;
        imgs = imgs.filter((i) => i !== img);
      }
    console.log("123", img, clientHeight)
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

function handleScroll(){
    setImages();
}

function setImages(){
    for(const img of imgs){
        setImage(img);
    }
}


