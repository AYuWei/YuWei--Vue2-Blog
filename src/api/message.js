import request from "./request"

/** 
 * 提交留言
 * msgInfo 参数
 * path: /api/message
 * method: POST
 * body: {
 *	nickname: "昵称",
 *	content: "留言内容，纯文本"
 * }
 */
export async function postMessage(msgInfo) {
    return await request.post("/api/message", msgInfo)
}

/**
 * 获取留言
 * path: /api/message
 * method: GET 
 */
export async function getMessage(page = 1, limit = 10) {
    return await request.get("/api/message", {
        params: {
            page,
            limit
        }
    })
}