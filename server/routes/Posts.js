import express from "express"
const router = express.Router()
import {createPost, getAllPosts} from "../controllers/Post.js"
router.get("/", getAllPosts)
router.post("/",createPost)

export default router