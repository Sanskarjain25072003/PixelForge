import "dotenv/config";
import Post from "../models/Post.js";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: `${process.env.CLOUD_NAME}`,
    api_key: `${process.env.API_KEY}`,
    api_secret: `${process.env.API_SECRET}`
});

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({})
        return res.status(200).json({ success: true, data: posts })
    } catch (err) {
        next(createError(error.status, error.message))
    }
}

export const createPost = async (req, res, next) => {
    let tempFilePath = null;
    try {
        const { name, prompt, photo, filePath } = req.body;
        tempFilePath = filePath;

        const photourl = await cloudinary.uploader.upload(photo);
        
        // Clean up temp file if it exists
        if (tempFilePath && fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath);
        }

        const newPost = await Post.create({
            name,
            prompt,
            photo: photourl.secure_url
        });

        return res.status(200).json({ success: true, data: newPost });
    } catch (err) {
        // Clean up temp file in case of error
        if (tempFilePath && fs.existsSync(tempFilePath)) {
            fs.unlinkSync(tempFilePath);
        }
        next(createError(err.status, err.message));
    }
};