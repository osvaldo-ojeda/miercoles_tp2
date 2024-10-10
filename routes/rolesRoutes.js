import { Router } from "express";

const rolesRoutes = Router();

rolesRoutes.get("/", (req, res)=>{
     res.send("res desde rolesRoutes")
})


export default rolesRoutes;
