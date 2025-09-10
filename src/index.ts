import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./routes/users";
import todoRoutes from "./routes/todo";

const PORT = process.env.PORT;
const app = express();

app.use(cors()); // recommended to use corsOptions here when deploying to production
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({ app: "todo", version: "0.0.1", author: "Jehu Casimiro" });
});

app.use("/api/users", userRoutes);
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
