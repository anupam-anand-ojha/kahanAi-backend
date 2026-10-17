import express from "express";
import storyRoute from "./routes/storyRoutes";

const app = express();
app.use(express.json());
app.use('/api/story', storyRoute)

export default app