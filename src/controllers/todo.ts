import { type Request, type Response } from "express";

interface Todo {
  id: number;
  user_id: number;
  content: string;
  completed: boolean;
}

const todo_list: Todo[] = [
  { id: 1, user_id: 1, content: "Clean Room", completed: false },
  { id: 2, user_id: 1, content: "Clean Restroom", completed: false },
  { id: 3, user_id: 2, content: "Clean City", completed: false },
];

export const getAllTodo = async (_req: Request, res: Response) => {
  try {
    const todos = await todo_list;
    if (!todos) {
      res.status(400).json({ message: "error fetching todos" });
    }
    res.json({ data: todos });
  } catch (error) {
    res.json({ error: error });
  }
};

export const getTodoById = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id as string);
    const todo = await todo_list.filter((todo) => todo.user_id === userId);
    res.json({ todo: todo });
  } catch (error) {
    res.json({ error: error });
  }
};
