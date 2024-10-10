import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userRoutes = Router();

const userController = new UserController();

// userRoutes.get("/", (req, res)=>{
//      res.send("res desde userRoutes")
// })
userRoutes.get("/",  userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/", userController.createUser);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;
