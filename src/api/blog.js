import request from "./request"

// 获取博客列表的数据
export async function getBlogs(page = 1, limit = 10, categoryid = -1){
    return await request.get("/api/blog", {
        params : {
            page,
            limit,
            categoryid
        }
    })
}

/**
 * 获取博客分类
 */
export async function getBlogCategories() {
    return await request.get("/api/blogtype");
}

/**
 * 获取单个博客
 * @param {*} id :id为博客的id
 * @returns 
 */
export async function getBlog(id){
    return await request.get(`/api/blog/${id}`);
}

/** 
 * @param {*} commentInfo 参数对象 
    path: /api/comment
    method: POST
    body: {
        nickname: "昵称",
        content: "评论内容，纯文本",
        blogId: <id>	#评论的博客id
    }
 * @returns 
 */
export async function postComment(commentInfo){
    return  await request.post("/api/comment",commentInfo)
}

/**
 * 分页获取评论
 * @param {*} blogid 
 * @param {*} page 
 * @param {*} limit 
 * @returns 
 * params参数为地址栏中的参数
 */
export async function getComment(blogid, page = 1, limit = 10){
    return await request.get("/api/comment", {
        params: {
          blogid,
          page,
          limit,
        },
      })
}