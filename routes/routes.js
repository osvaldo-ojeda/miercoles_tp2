import { Router } from "express";
import userRoutes from "./userRoutes.js";
import { logger } from "../midlewares/logger.js";

const routes = Router();

routes.use("/user", userRoutes);
// routes.use("/roles",rolesRoutes);
// routes.use("/product",productRoutes);

export default routes;
