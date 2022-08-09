import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    siteTitle: " Vue2_小小青柠蓝莓 ",
    github: "https://github.com/AYuWei",
    qq: "1422041216",
    qqQrCode:
      "http://rgajwjxis.hn-bkt.clouddn.com/blog-img/qq.jpg",
    weixin: "AYuWei0804",
    weixinQrCode:
      "http://rgajwjxis.hn-bkt.clouddn.com/blog-img/weixin.jpg",
    mail: "ayuwei0804@126.com", 
    githubName: "AYuWei", 
    favicon: "https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  },
});
