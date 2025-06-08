import axios from "axios"
const API = axios.create({
    baseURL: "http://localhost:8080/api/"
})
export const GetPosts = async () => {
    return await API.get("/post")
}
export const CreatePost = async (post) => {
    return await API.post("/post", post)
}
export const generateAIImage = async (data) => {
    return await API.post("/generate", {data})
}