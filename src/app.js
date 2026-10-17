import express from "express";
import storyRoute from "./routes/storyRoutes";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();
app.use(express.json());
app.use('/api/stories', storyRoute)
app.use(errorMiddleware);

export default app