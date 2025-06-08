import { generateImage } from "../generateImage.js";
import { createError } from "../error.js";
import fs from "fs";

export const generateAIImage = async (req, res, next) => {
    try {
        const { data } = req.body;
        const result = await generateImage(data.prompt);
        
        return res.status(200).json({
            success: true,
            photo: result.base64,
            filePath: result.filePath
        });
    } catch (err) {
        next(createError(500, err.message));
    }
};