import { Router } from "express";
import UserControllers from "../controllers/userControllers.js";

const userControllers = new UserControllers();

const userRoutes = Router();

userRoutes.get("/", userControllers.getAllUsers);
userRoutes.get("/:id", userControllers.getUserById);
userRoutes.post("/", userControllers.createUser);
userRoutes.put("/:id", userControllers.updateUser);
userRoutes.delete("/:id", userControllers.deleteUser);

export default userRoutes;
