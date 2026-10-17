import express from "express";
import { createStory } from "../controllers/storyController";

const storyRoute = express.Router();

storyRoute.post("/generate", createStory);

export default storyRoute;