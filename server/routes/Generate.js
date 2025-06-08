import express from "express";
const router = express.Router();
import { generateAIImage } from "../controllers/Generate.js";

router.post("/", generateAIImage);

export default router;