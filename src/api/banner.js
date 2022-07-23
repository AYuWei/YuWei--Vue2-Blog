import request from "./request"

export default async function getBanners(){
    return await request.get("/api/banner")
}