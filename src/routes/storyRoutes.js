import express from "express";
import { createStory } from "../controllers/storyController";

const storyRoute = express.Router();

router.post("/generate", createStory);

export default storyRoute;