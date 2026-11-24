
import express from "express";
import cors from "cors";
import storyRoutes from "./routes/storyRoutes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
    ],
  })
);

app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.json({ success: true, message: "KahanAI API is running" });
});

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "API is healthy" });
});

app.use("/api/stories", storyRoutes);

export default app;
