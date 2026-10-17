import express from "express";
import { createStory } from "../controllers/storyController";

const router = express.Router();

router.post("/generate", createStory);

export default router;