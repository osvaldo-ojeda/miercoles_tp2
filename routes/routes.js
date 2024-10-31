import { Router } from "express";
import userRoutes from "./userRoutes.js";
import rolesRoutes from "./rolesRoutes.js";

const routes = Router();

routes.use("/roles", rolesRoutes);
routes.use("/users", userRoutes);

export default routes;
