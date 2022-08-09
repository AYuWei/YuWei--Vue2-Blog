import Mock from "mockjs";
import qs from "querystring";
/**
 * 提交留言板
 */
Mock.mock("/api/message","post",{
    code : 0,
    msg : "",
    data : {
        id : "@guid",
        nickname : "@cname",
        content : "@cparagraph(1,10)",
        "avatar|1": [
            "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/05555512a1e07a3658584426c1bc5b3e_2000x2000.jpeg",
            "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/1aaf2703245a213a80e2e7357996586e_2000x2000.jpeg",
            "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/1c4671651c918e84fd15c784c37f47d1_2000x2000.jpeg",
            "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/439b9db6e28aa12faa67633d8e0b7061_2000x2000.jpeg",
            "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/4a9327efcb1214edd59595a8df707553_2000x2000.jpeg",
            "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/8c023dea13b118b723264e756abb5654_2000x2000.jpeg",
            "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/951d1660687c8ae080f6d167a5184186_2000x2000.jpeg",
            "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/f9a46313bbfd8ed7566cef320b5e52f8_2000x2000.jpeg",
            "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/bb9d3d9e01279c37955dbcfef0aed4a8_2000x2000.jpeg",
          ],
    }
})

/**
 * 获取留言板的消息
 */
Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
    const query = qs.parse(options.url);
  
    return Mock.mock({
      code: 0,
      msg: "",
      data: {
        total: 52,
        [`rows|${query.limit || 10}`]: [
          {
            id: "@guid",
            nickname: "@cname",
            content: "@cparagraph(1, 10)",
            createDate: Date.now(),
            "avatar|1": [
              "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/05555512a1e07a3658584426c1bc5b3e_2000x2000.jpeg",
              "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/1aaf2703245a213a80e2e7357996586e_2000x2000.jpeg",
              "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/1c4671651c918e84fd15c784c37f47d1_2000x2000.jpeg",
              "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/439b9db6e28aa12faa67633d8e0b7061_2000x2000.jpeg",
              "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/4a9327efcb1214edd59595a8df707553_2000x2000.jpeg",
              "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/8c023dea13b118b723264e756abb5654_2000x2000.jpeg",
              "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/951d1660687c8ae080f6d167a5184186_2000x2000.jpeg",
              "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/f9a46313bbfd8ed7566cef320b5e52f8_2000x2000.jpeg",
              "http://rgajwjxis.hn-bkt.clouddn.com/ayuwei/bb9d3d9e01279c37955dbcfef0aed4a8_2000x2000.jpeg",
            ],
          },
        ],
      },
    });
  });
  