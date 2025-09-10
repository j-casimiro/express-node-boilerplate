import { type Request, type Response } from "express";

interface User {
  id: number;
  name: string;
  email: string;
}

const user_list: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Bob", email: "bob@example.com" },
];

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await user_list;
    res.json({ data: users });
  } catch (error) {}
};
