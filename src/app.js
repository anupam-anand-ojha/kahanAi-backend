
import express from "express";
import cors from "cors";
import storyRoutes from "./routes/storyRoutes.js";
import errorMiddleware from "./middlewares/error.middleware.js";
const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to KahanAI API",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "KahanAI server is running",
  });
});

app.use("/api/stories", storyRoutes);
app.use(errorMiddleware);

export default app;
