import getComponentRootDom from "./getComponentRootDom.js";
import WIcon from "@/components/WIcon/WIcon.vue";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function(options = {}){
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;

    console.log("showMessage");
    // 创建消息元素
    const MessageDom = document.createElement("div");
    // 获取图标组件库Dom元素
    const IconDom = getComponentRootDom(WIcon,{
        type
    }); 
    MessageDom.innerHTML = `
        <span class="${styles.icon}">
            ${ IconDom.outerHTML }
        </span>
        <div>
            ${ content }
        </div>
    `; 
      // 设置样式
    const typeClassName = styles[`message-${type}`]; //类型样式名
    MessageDom.className = `${styles.message} ${typeClassName}`;
    // 判断容器是不是默认定位 是则赋值为相对定位  && options.container === document.body
    console.log("container", options.container == document.body)
    if(getComputedStyle(container).position === "static" && options.container != undefined){
        container.style.position = "relative"
    }     
    // 添加道容器
    container.appendChild( MessageDom )
    // 浏览器强行渲染
    MessageDom.clientHeight; // 导致reflow
    // 回归到正常位置
    MessageDom.style.opacity = 1;
    MessageDom.style.transform = `translate(-50%, -50%)`;
      // 等一段时间，消失
  setTimeout(() => {
    MessageDom.style.opacity = 0;
    MessageDom.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    MessageDom.addEventListener(
      "transitionend",
      function() {
        MessageDom.remove();
        // 运行回调函数
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}