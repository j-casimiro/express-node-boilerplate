import express from "express";
import { getAllTodo, getTodoById } from "../controllers/todo";

const router = express.Router();

router.get("/", getAllTodo);
router.get("/:id", getTodoById);

export default router;
