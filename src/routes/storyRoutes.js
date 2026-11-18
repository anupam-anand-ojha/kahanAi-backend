import express from "express";
import { createStory } from "../controllers/storyController.js";

const storyRoute = express.Router();

storyRoute.post("/generate", createStory);


export default storyRoute;
