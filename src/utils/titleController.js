// 设置页面标题
var routeTitle = "",
    siteTitle = "";

function setTitle(){
    if( !routeTitle && !siteTitle ){ 
        document.title = "loading...";
    } else if( routeTitle && !siteTitle ){
        document.title = routeTitle;
    } else if( !routeTitle && siteTitle ){
        document.title = siteTitle;
    } else {
        document.title = `${routeTitle}-${siteTitle}`;
    }
}
export default {
    /**
     * 期待看到的样子
     * 首页-我的个人博客
     * 文章-我的个人博客 
     */
    // 设置路由标题
    setRouterTitle(title){
        routeTitle = title,
        setTitle();
    },
    // 设置文章标题
    setSiteTitle(title){
        siteTitle = title,
        setTitle();
    }
}