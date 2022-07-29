export default function(timestamp){
    const date = new Date(+timestamp); // 装换位事件格式
    // 获取月份、两位数字、不足补0
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    // 获取某天
    const day = date.getDate().toString().padStart(2, "0"); 
    return `${date.getFullYear()}-${month}-${day}`;
}